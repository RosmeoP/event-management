import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';
import EventForm from './pages/EventForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/events/:id/edit" element={<EventForm />} />
            <Route path="/add-event" element={<EventForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
