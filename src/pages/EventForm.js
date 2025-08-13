import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEventContext } from '../context/EventContext';
import GoBackButton from '../components/GoBackButton';

const EventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  
  const { addEvent, updateEvent, getEvent } = useEventContext();
  
  const [existingEvent, setExistingEvent] = useState(null);
  const [eventLoading, setEventLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    category: 'Conference'
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadEvent = async () => {
      if (isEditing && id) {
        setEventLoading(true);
        try {
          const { event } = await getEvent(id);
          setExistingEvent(event);
          if (event) {
            setFormData({
              title: event.title || '',
              description: event.description || '',
              date: event.date || '',
              location: event.location || '',
              category: event.category || 'Conference'
            });
          }
        } catch (error) {
          console.error('Error loading event:', error);
        } finally {
          setEventLoading(false);
        }
      }
    };

    loadEvent();
  }, [isEditing, id, getEvent]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      if (isEditing) {
        await updateEvent(id, formData);
      } else {
        await addEvent(formData);
      }
      navigate('/events');
    } catch (error) {
      console.error('Error saving event:', error);
    } finally {
      setLoading(false);
    }
  };

  if (isEditing && eventLoading) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <GoBackButton />
        </div>
        <div className="flex flex-col justify-center items-center min-h-64 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-slate-600 font-medium">Loading event for editing...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Go Back Button */}
      <div className="mb-6 animate-fade-in-up">
        <GoBackButton />
      </div>
      
      <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-800 bg-clip-text text-transparent mb-2">
          {isEditing ? 'Edit Event' : 'Add New Event'}
        </h1>
        <p className="text-slate-600">
          {isEditing ? 'Update the event details below' : 'Fill in the details to create a new event'}
        </p>
      </div>

      <div className="bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-lg rounded-2xl p-6 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Event Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter event title"
            />
            {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter event description"
            />
            {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
          </div>

          {/* Date and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.location ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter event location"
              />
              {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location}</p>}
            </div>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.category ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
              <option value="Meetup">Meetup</option>
            </select>
            {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isEditing ? 'Updating...' : 'Creating...'}
                </span>
              ) : (
                isEditing ? 'Update Event' : 'Create Event'
              )}
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/events')}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;