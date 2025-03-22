# Map Dashboard App

This project is a React frontend with a Node.js backend that integrates a map using Leaflet, implements JWT-based authentication, and provides a user-friendly interface.

## Features
- **Login Page**: Authenticate users with a username and password.
- **Dashboard**: Display cards that navigate to a map view.
- **Map View**: Show a map of India with zoom functionality.
- **Protected Routes**: Ensure only authenticated users can access the dashboard and map view.

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

---

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   PORT=5000
   SECRET_KEY=your-secret-key
   ```
   Replace `your-secret-key` with a secure secret key for JWT token generation.
4. Start the backend server:
   ```bash
   node index.js
   ```
   The backend will run on `http://localhost:5000`.

---

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

---

## Packages Used

### Backend
- **express**: Web framework for Node.js.
- **jsonwebtoken**: For JWT-based authentication.
- **cors**: To enable cross-origin requests.
- **dotenv**: To load environment variables from a `.env` file.
- **body-parser**: To parse incoming request bodies.

### Frontend
- **react**: JavaScript library for building user interfaces.
- **react-router-dom**: For routing in the React app.
- **axios**: For making HTTP requests.
- **leaflet** and **react-leaflet**: For map integration.
- **bootstrap**: For styling components.

---

## Project Structure

```
map-dashboard-app/
├── backend/
│   ├── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   ├── MapView.js
│   │   │   └── ProtectedRoute.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
└── README.md
```

---

## Deployment
### Backend
- The application is deployed on **Render** and can be accessed [here](https://backend-auth-1xam.onrender.com/api/login)

### Frontend
- The application is deployed on **Netlify** and can be accessed [here](https://map-dashboard-app.vercel.app/)


---

## How to Run the Application
1. Start the backend server:
   ```bash
   cd backend
   node index.js
   ```
2. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000`.

---

## Testing Credentials
- **Username**: `user`
- **Password**: `password`

---


