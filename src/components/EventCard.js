import { Link } from 'react-router-dom';

const EventCard = ({ event, onDelete }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this event?')) {
      onDelete(event.id);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Conference': 'bg-blue-100 text-blue-800',
      'Workshop': 'bg-green-100 text-green-800',
      'Meetup': 'bg-purple-100 text-purple-800',
      'Webinar': 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
          <div className="flex space-x-2">
            <Link
              to={`/events/${event.id}/edit`}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
        
        <Link to={`/events/${event.id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {event.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {event.description}
          </p>
          
          <div className="space-y-1">
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(event.date).toLocaleDateString()}
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;