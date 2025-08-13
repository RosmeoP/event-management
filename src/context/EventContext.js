import { createContext, useContext, useState, useEffect } from 'react';
import { eventAPI } from '../services/api';
import { useToast } from './ToastContext';

const EventContext = createContext();

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await eventAPI.getEvents();
      // Transform API data to match our event structure - get all 100 events
      const transformedEvents = response.data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.body,
        date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        location: `Location ${post.id}`,
        category: ['Conference', 'Workshop', 'Meetup'][post.id % 3]
      }));
      setEvents(transformedEvents);
      setError(null);
    } catch (err) {
      setError('Failed to fetch events');
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    try {
      await eventAPI.deleteEvent(id);
      setEvents(prevEvents => prevEvents.filter(event => event.id !== parseInt(id)));
      toast.success('Event deleted successfully');
    } catch (err) {
      setError('Failed to delete event');
      toast.error('Failed to delete event. Please try again.');
      console.error('Error deleting event:', err);
      throw err;
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await eventAPI.createEvent(newEvent);
      const event = {
        ...newEvent,
        id: response.data.id || Date.now() + Math.random() * 1000
      };
      setEvents(prevEvents => [event, ...prevEvents]);
      toast.success('Event created successfully');
      return event;
    } catch (err) {
      setError('Failed to create event');
      toast.error('Failed to create event. Please try again.');
      console.error('Error creating event:', err);
      throw err;
    }
  };

  const updateEvent = async (id, updatedEvent) => {
    try {
      await eventAPI.updateEvent(id, updatedEvent);
      
      setEvents(prevEvents => 
        prevEvents.map(event => 
          event.id === parseInt(id) ? { ...updatedEvent, id: parseInt(id) } : event
        )
      );
      
      toast.success('Event updated successfully');
      return updatedEvent;
    } catch (err) {
      setError('Failed to update event');
      toast.error('Failed to update event. Please try again.');
      console.error('Error updating event:', err);
      throw err;
    }
  };

  const getEvent = (id) => {
    // First try to find it in local state
    const localEvent = events.find(event => event.id === parseInt(id));
    if (localEvent) {
      return Promise.resolve({ event: localEvent, loading: false, error: null });
    }

    // If not found locally, fetch from API
    return eventAPI.getEvent(id)
      .then(response => {
        const transformedEvent = {
          id: response.data.id,
          title: response.data.title,
          description: response.data.body,
          date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          location: `Location ${response.data.id}`,
          category: ['Conference', 'Workshop', 'Meetup'][response.data.id % 3]
        };
        return { event: transformedEvent, loading: false, error: null };
      })
      .catch(err => {
        return { event: null, loading: false, error: 'Failed to fetch event' };
      });
  };

  const value = {
    events,
    loading,
    error,
    deleteEvent,
    addEvent,
    updateEvent,
    getEvent,
    refetch: fetchEvents
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};