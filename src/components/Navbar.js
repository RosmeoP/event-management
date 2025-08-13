import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Event Manager
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link 
                to="/events" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/events') || isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                All Events
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/add-event"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Add Event
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden pb-4">
          <Link 
            to="/events" 
            className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive('/events') || isActive('/') 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
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