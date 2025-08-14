import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  EventFlow
                </h1>
                <p className="text-xs text-slate-500 font-medium">Dashboard</p>
              </div>
            </Link>
            
            <div className="hidden md:flex space-x-1">
              <Link 
                to="/events" 
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive('/events') || isActive('/') 
                    ? 'text-indigo-700 bg-indigo-50 shadow-sm' 
                    : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                All Events
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/add-event"
              className="group bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center space-x-2"
            >
              <svg className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>New Event</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <Link 
            to="/events" 
            className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              isActive('/events') || isActive('/') 
                ? 'text-indigo-700 bg-indigo-50' 
                : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
            }`}
          >
            All Events
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;