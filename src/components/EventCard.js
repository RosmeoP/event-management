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
      'Conference': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
      'Workshop': 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white',
      'Meetup': 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
      'Webinar': 'bg-gradient-to-r from-orange-500 to-red-500 text-white'
    };
    return colors[category] || 'bg-gradient-to-r from-slate-500 to-gray-500 text-white';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Conference': (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      'Workshop': (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      'Meetup': (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.98 1.98 0 0118 7c-.8 0-1.54.5-1.84 1.25l-1.92 5.75H12l-2.24-6.75A1.99 1.99 0 008 6c-.8 0-1.54.5-1.84 1.25L3.5 16H6v6h4v-6h4v6h4z"/>
        </svg>
      ),
      'Webinar': (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    };
    return icons[category] || icons['Conference'];
  };

  return (
    <div className="group bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-500 overflow-hidden">
      {/* Top gradient bar */}
      <div className={`h-1 ${getCategoryColor(event.category).split(' ')[0]} ${getCategoryColor(event.category).split(' ')[1]} ${getCategoryColor(event.category).split(' ')[2]}`}></div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-bold ${getCategoryColor(event.category)} shadow-sm`}>
            {getCategoryIcon(event.category)}
            <span>{event.category}</span>
          </div>
          
          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link
              to={`/events/${event.id}/edit`}
              className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </Link>
            <button
              onClick={handleDelete}
              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <Link to={`/events/${event.id}`} className="block space-y-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-2">
              {event.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
              {event.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-slate-500">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-medium">{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </div>
              
              <div className="flex items-center text-sm text-slate-500">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mr-2">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-medium truncate max-w-24">{event.location}</span>
              </div>
            </div>
            
            <div className="flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
              <span className="text-sm font-semibold mr-1">View</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;