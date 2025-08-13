import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const eventAPI = {
  getEvents: () => api.get('/posts'),
  getEvent: (id) => api.get(`/posts/${id}`),
  createEvent: (event) => api.post('/posts', event),
  updateEvent: (id, event) => api.put(`/posts/${id}`, event),
  deleteEvent: (id) => api.delete(`/posts/${id}`)
};

export default api;