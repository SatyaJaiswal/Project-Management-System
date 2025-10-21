# 🧩 Project Management System
A full-stack **Project Management System** built with **React.js**, **Node.js**, **Express**, **MongoDB**, and **Material-UI**. This application allows users to manage projects and tasks efficiently with a beautiful dark theme interface.

## 🚀 Features
- 🔐 **User Authentication** – Register and login system  
- 📁 **Project Management** – Create, read, update, and delete projects  
- 📝 **Task Management** – Create and manage tasks within projects  
- 📱 **Responsive Design** – Works seamlessly across all devices  
- 🌙 **Dark Theme** – Elegant Material-UI dark mode  
- ⚡ **Real-time Updates** – Instant UI refresh after operations  
- 📊 **Pagination** – Smooth handling of large datasets  

## 🛠️ Tech Stack
### 🎨 Frontend
- React.js (with TypeScript)
- Material-UI (MUI)
- React Hook Form
- React Router
- Axios
- React Toastify

### ⚙️ Backend
- Node.js with Express.js  
- MongoDB with Mongoose  
- JWT for Authentication  
- bcrypt for Password Hashing  
- CORS for Cross-Origin Requests  

## 📋 Prerequisites
Before running this application, ensure the following are installed on your system:
- [Node.js](https://nodejs.org/) (v14 or higher)  
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)  
- npm or yarn

## ⚡ Quick Start
### 1️⃣ Clone the Repository

3️⃣ Frontend Setup
# Navigate to frontend directory (in a new terminal)
cd ../Frontend

# Install dependencies
npm install

# Start the frontend development server
npm start


✅ The frontend will run on http://localhost:3000

4️⃣ Environment Configuration

If the .env file is missing in the backend folder:

# Copy the example environment file
cp .env.example .env


Then open the .env file and update it with your configuration:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

5️⃣ Admin Seeder (Optional)

To populate the database with initial admin data, run:

# Navigate to backend directory
cd Backend

# Run the admin seeder
node adminSeeder.js


✅ This will insert initial admin details into your MongoDB database.

🔧 Available Scripts
🖥️ Backend Scripts

npm start – Start the production server

npm run dev – Start the development server with nodemon

npm test – Run backend tests

💻 Frontend Scripts

npm start – Start the frontend development server

npm run build – Build the project for production

npm test – Run frontend tests
```bash
git clone git@github.com:SatyaJaiswal/Project-Management-System.git
