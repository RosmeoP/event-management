# Event Management Dashboard

A modern, responsive React.js application for managing events with full CRUD functionality, built with Tailwind CSS and React Router.

---

## 🚀 Features

- **Event Management:** Create, read, update, and delete events
- **Responsive Design:** Optimized for mobile and desktop devices
- **Search & Filter:** Find events by title, description, or category
- **Pagination:** Navigate through 100+ events with smooth animations
- **Form Validation:** Robust client-side validation for all forms
- **Modern UI:** Professional interface with glass-morphism effects
- **API Integration:** RESTful API via Axios
- **React Router:** Seamless navigation between pages

---

## 🌍 Deployment

[![Vercel](https://vercelbadge.vercel.app/api/event-management-umber-psi)](https://event-management-umber-psi.vercel.app/)

The app is live and deployed via [Vercel](https://vercel.com/) at:

👉 [https://event-management-umber-psi.vercel.app/](https://event-management-umber-psi.vercel.app/)

---

## 🛠️ Tech Stack

| Tech                | Version    | Purpose                         |
|---------------------|------------|---------------------------------|
| React.js            | 19.1.1     | Frontend framework              |
| React Router DOM    | 7.8.0      | Routing/navigation              |
| Axios               | 1.11.0     | API requests                    |
| Tailwind CSS        | 3.4.17     | Utility-first CSS               |
| JavaScript (ES6+)   | —          | Modern JavaScript features      |

---

## 📋 Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

---

## 🏃‍♂️ Quick Start

1. **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd event-management
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm start
    ```
    App will open at [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── EventCard.js    # Event card for list view
│   ├── Navbar.js       # Navigation bar
│   └── SearchFilter.js # Search/filter UI
├── pages/              # Main app pages
│   ├── EventList.js    # Event listing
│   ├── EventDetail.js  # Single event view
│   └── EventForm.js    # Add/Edit event
├── hooks/              # Custom React hooks
│   └── useEvents.js    # Event management logic
├── services/           # API services
│   └── api.js          # Axios/API calls
├── App.js              # App entry
├── index.js            # Bootstrapping
└── index.css           # Global styles/Tailwind
```

---

## 🌐 API Integration

Using [JSONPlaceholder](https://jsonplaceholder.typicode.com) as a mock backend:

| Method | Endpoint         | Description         |
|--------|------------------|--------------------|
| GET    | `/posts`         | Fetch all events   |
| GET    | `/posts/:id`     | Fetch event by ID  |
| POST   | `/posts`         | Create new event   |
| PUT    | `/posts/:id`     | Update event       |
| DELETE | `/posts/:id`     | Delete event       |

*Note: Data persistence is simulated.*

---

## 📱 Pages & Navigation

- **Event List (`/` or `/events`)**: Responsive grid, search/filter, quick edit/delete, loading/error states
- **Event Detail (`/events/:id`)**: Formatted event info, edit/delete actions
- **Add Event (`/add-event`)**: Real-time validation, required fields, no past dates
- **Edit Event (`/events/:id/edit`)**: Pre-filled form, same validation, update API

---

## ✅ Form Validation

- **Title:** Required, min 3 characters
- **Description:** Required, min 10 characters
- **Date:** Required, must be in the future
- **Location:** Required
- **Category:** Must select from options

---

## 🎨 Responsive Design

- Mobile-first approach (Tailwind CSS)
- Adaptive grid layouts
- Touch-friendly UI
- Optimized navigation

---

## 🔍 Search & Filter Features

- Real-time search by title/description
- Dropdown category filter
- Combined filtering
- Results counter
- Visual feedback for empty states

---

## 🚀 Available Scripts

- `npm start` — Development server
- `npm build` — Production build
- `npm test` — Test runner
- `npm eject` — Eject from Create React App

---

## 🎯 Features Implemented

- [x] React.js functional components/hooks
- [x] React Router navigation
- [x] Tailwind CSS styling
- [x] Axios API integration
- [x] Responsive layout
- [x] Form validation
- [x] Filter/search (bonus)
- [x] Pagination with smooth animations
- [x] Toast notifications and confirmation modals
- [x] Loading spinners, error handling, go-back navigation
- [x] Glass-morphism UI effects and consistent design

---

## 🔧 Development Notes

- **Custom Hooks:**  
  `useEvents()` (list state, CRUD ops), `useEvent(id)` (single event logic)
- **State Management:**  
  Local state with React hooks (no Redux)
- **Error Handling:**  
  API & form errors, loading states

---

## 🌟 Future Enhancements

- Authentication & Authorization
- Category management
- Event image uploads
- Calendar view
- Event sharing
- Email notifications
- Advanced filtering options
- Export functionality

---

## 🎉 Getting Started

1. Install dependencies: `npm install`
2. Start dev server: `npm start`
3. Open browser: [http://localhost:3000](http://localhost:3000)
4. Explore: Create, view, edit, delete events

App auto-reloads on code changes.

---

*Built with ❤️ using React.js, Tailwind CSS, and modern web development best practices.*
<img width="1470" height="956" alt="Screenshot 2025-08-13 at 4 58 32 PM" src="https://github.com/user-attachments/assets/aed61a72-fa72-49e6-aca1-6b8111a91c6f" />
<img width="1470" height="956" alt="Screenshot 2025-08-13 at 5 03 10 PM" src="https://github.com/user-attachments/assets/1d0ea709-b72b-4092-bccc-d05b14f02a04" />
<img width="1470" height="956" alt="Screenshot 2025-08-13 at 5 03 28 PM" src="https://github.com/user-attachments/assets/318d0504-6141-4877-b6c1-96afb256b5f3" />




<!--
Badges and screenshots can be added here:

![App Screenshot](assets/screenshot.png)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
-->
<img width="1470" height="956" alt="Screenshot 2025-08-13 at 5 04 05 PM" src="https://github.com/user-attachments/assets/e0fdcd14-0634-4fea-9fe8-72cad4202059" />
