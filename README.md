# Project Management System

A full-stack Project Management System built with React.js, Node.js, Express, MongoDB, and Material-UI. This application allows users to manage projects and tasks with a beautiful dark theme interface.

## 🚀 Features

- **User Authentication** - Register and login system
- **Project Management** - Create, read, update, and delete projects
- **Task Management** - Create tasks associated with projects
- **Responsive Design** - Works on all devices
- **Dark Theme** - Beautiful Material-UI dark theme
- **Real-time Updates** - Instant UI updates after operations
- **Pagination** - Efficient data loading for large datasets

## 🛠️ Tech Stack

### Frontend
- React.js with TypeScript
- Material-UI (MUI) for components
- React Hook Form for form handling
- React Router for navigation
- Axios for API calls
- React Toastify for notifications

### Backend
- Node.js with Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the Repository  

```bash
git clone <your-repository-url>
cd project-management-system

2. Backend Setup
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start

The backend server will run on http://localhost:5000

3. Frontend Setup
bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm start
The frontend will run on http://localhost:3000

4. Environment Configuration
If you don't have a .env file in the backend directory:

bash
# Copy the example environment file
cp .env.example .env
Then edit the .env file with your MongoDB connection string and other configuration:

env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
5. Admin Seeder (Optional)
To populate the database with initial admin data:

bash
# Navigate to backend directory
cd backend

# Run the admin seeder
node adminSeeder.js
This will create initial admin users in the database.

🔧 Available Scripts
Backend Scripts
npm start - Start the production server

npm run dev - Start the development server with nodemon

npm test - Run tests

Frontend Scripts
npm start - Start the development server

npm run build - Build for production

npm test - Run tests
