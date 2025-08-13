# Event Management Dashboard

A modern, responsive React.js application for managing events with full CRUD functionality, built with Tailwind CSS and React Router.

## 🚀 Features

- **Event Management**: Create, read, update, and delete events
- **Responsive Design**: Optimized for both mobile and desktop devices
- **Search & Filter**: Find events by title, description, or category
- **Form Validation**: Comprehensive client-side validation for all forms
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **API Integration**: RESTful API integration using Axios
- **React Router**: Seamless navigation between pages

## 🛠️ Tech Stack

- **React.js** (v19.1.1) - Frontend framework with functional components and hooks
- **React Router DOM** (v7.8.0) - Client-side routing
- **Axios** (v1.11.0) - HTTP client for API requests
- **Tailwind CSS** (v3.4.17) - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

## 🏃‍♂️ Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd event-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── EventCard.js    # Event card component for list view
│   ├── Navbar.js       # Navigation bar component
│   └── SearchFilter.js # Search and filter component
├── pages/              # Page components
│   ├── EventList.js    # Events listing page
│   ├── EventDetail.js  # Event detail view page
│   └── EventForm.js    # Add/Edit event form page
├── hooks/              # Custom React hooks
│   └── useEvents.js    # Event management hooks
├── services/           # API services
│   └── api.js          # Axios configuration and API calls
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🌐 API Integration

The application uses JSONPlaceholder API (`https://jsonplaceholder.typicode.com`) as a mock backend:

- **GET /posts** - Fetch all events
- **GET /posts/:id** - Fetch specific event
- **POST /posts** - Create new event
- **PUT /posts/:id** - Update existing event
- **DELETE /posts/:id** - Delete event

*Note: Since JSONPlaceholder is a mock API, actual data persistence is simulated.*

## 📱 Pages & Navigation

### 1. Event List (`/` or `/events`)
- Displays all events in a responsive grid layout
- Search functionality by title or description
- Filter by event category
- Quick actions to edit/delete events
- Loading states and error handling

### 2. Event Detail (`/events/:id`)
- Detailed view of a specific event
- Event information with formatted date and location
- Edit and delete actions
- Responsive layout with proper spacing

### 3. Add Event (`/add-event`)
- Form to create new events
- Real-time validation with error messages
- Required fields: title, description, date, location, category
- Date validation (no past dates allowed)

### 4. Edit Event (`/events/:id/edit`)
- Pre-populated form with existing event data
- Same validation rules as add event form
- Update functionality with API integration

## ✅ Form Validation

Comprehensive validation includes:

- **Title**: Required, minimum 3 characters
- **Description**: Required, minimum 10 characters
- **Date**: Required, cannot be in the past
- **Location**: Required field
- **Category**: Must select from available options

## 🎨 Responsive Design

The application is fully responsive with:

- **Mobile-first approach** using Tailwind CSS
- **Flexible grid layouts** that adapt to screen sizes
- **Touch-friendly interfaces** for mobile devices
- **Optimized navigation** for both desktop and mobile

## 🔍 Search & Filter Features

- **Real-time search** by event title or description
- **Category filtering** with dropdown selection
- **Combined filtering** (search + category filter)
- **Results counter** showing filtered vs total events
- **Clear visual feedback** for empty states

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎯 Key Features Implemented

### ✅ Technical Requirements Met

- [x] React.js with functional components and hooks
- [x] React Router for navigation (List, Add/Edit, Detail)
- [x] Tailwind CSS for styling
- [x] Axios for API integration
- [x] Responsive layout for mobile and desktop
- [x] Form validation for adding/editing events
- [x] Filter and search functionality (Bonus feature)

### 🏆 Additional Features

- **Loading states** with spinners
- **Error handling** with user-friendly messages
- **Confirmation dialogs** for destructive actions
- **Breadcrumb navigation** for better UX
- **Category badges** with color coding
- **Professional UI/UX** with consistent design

## 🔧 Development Notes

### Custom Hooks
- `useEvents()` - Manages event list state and CRUD operations
- `useEvent(id)` - Fetches and manages individual event data

### State Management
- Local state management using React hooks
- No external state management library needed for this scope

### Error Handling
- API error handling with user feedback
- Form validation with real-time error display
- Loading states for better user experience

## 🌟 Future Enhancements

Potential improvements for future versions:

- **Authentication & Authorization**
- **Event categories management**
- **Event images upload**
- **Calendar view**
- **Event sharing functionality**
- **Email notifications**
- **Advanced filtering options**
- **Pagination for large datasets**

---

## 🎉 Getting Started

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm start`
3. **Open browser**: Navigate to `http://localhost:3000`
4. **Explore the app**: Create, view, edit, and delete events!

The application will automatically reload when you make changes to the code.

---

*Built with ❤️ using React.js, Tailwind CSS, and modern web development practices.*
