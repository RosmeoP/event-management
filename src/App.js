import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider } from './context/EventContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';
import EventForm from './pages/EventForm';
import ToastContainer from './components/ToastContainer';

function App() {
  return (
    <ToastProvider>
      <EventProvider>
        <Router>
          <div className="min-h-screen bg-slate-50">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
              <Routes>
                <Route path="/" element={<EventList />} />
                <Route path="/events" element={<EventList />} />
                <Route path="/events/:id" element={<EventDetail />} />
                <Route path="/events/:id/edit" element={<EventForm />} />
                <Route path="/add-event" element={<EventForm />} />
              </Routes>
            </main>
            <ToastContainer />
          </div>
        </Router>
      </EventProvider>
    </ToastProvider>
  );
}

export default App;
