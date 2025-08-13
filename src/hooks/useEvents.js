import { useState, useEffect } from 'react';
import { eventAPI } from '../services/api';

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await eventAPI.getEvents();
      // Transform API data to match our event structure
      const transformedEvents = response.data.map(post => ({
        id: post.id,
        title: post.title,
        description: post.body,
        date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        location: `Location ${post.id}`,
        category: ['Conference', 'Workshop', 'Meetup', 'Webinar'][post.id % 4]
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
      setEvents(events.filter(event => event.id !== id));
    } catch (err) {
      setError('Failed to delete event');
      console.error('Error deleting event:', err);
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await eventAPI.createEvent(newEvent);
      const event = {
        ...newEvent,
        id: response.data.id || Date.now()
      };
      setEvents([event, ...events]);
      return event;
    } catch (err) {
      setError('Failed to create event');
      console.error('Error creating event:', err);
      throw err;
    }
  };

  const updateEvent = async (id, updatedEvent) => {
    try {
      await eventAPI.updateEvent(id, updatedEvent);
      setEvents(events.map(event => 
        event.id === parseInt(id) ? { ...updatedEvent, id: parseInt(id) } : event
      ));
      return updatedEvent;
    } catch (err) {
      setError('Failed to update event');
      console.error('Error updating event:', err);
      throw err;
    }
  };

  return {
    events,
    loading,
    error,
    deleteEvent,
    addEvent,
    updateEvent,
    refetch: fetchEvents
  };
};

export const useEvent = (id) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await eventAPI.getEvent(id);
        const transformedEvent = {
          id: response.data.id,
          title: response.data.title,
          description: response.data.body,
          date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          location: `Location ${response.data.id}`,
          category: ['Conference', 'Workshop', 'Meetup', 'Webinar'][response.data.id % 4]
        };
        setEvent(transformedEvent);
        setError(null);
      } catch (err) {
        setError('Failed to fetch event');
        console.error('Error fetching event:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  return { event, loading, error };
};