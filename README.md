# Task-Management-System
It is a full-stack task management application designed to streamline your productivity. Built with a robust tech stack, it offers a seamless user experience for managing tasks efficiently.

Note: Email verification is optional in this implementation.

🚀 Tech Stack
Frontend:
Next.js 13+ (App Router)
TypeScript
Tailwind CSS
ShadCN UI
React Hook Form
Zod
Axios

Backend:
Node.js
Express.js
MongoDB with Mongoose
JWT for Authentication

Deployment:
Frontend: Vercel
Backend: Render

GitHub
📸 Screenshots
Login Page


Dashboard
🧰 Features
User Authentication (Login/Signup)
Create, Read, Update, and Delete (CRUD) Tasks
Responsive Design for All Devices
Real-time Notifications
Optional Email Verification
Secure JWT-based Authentication
Intuitive UI with ShadCN Components
🛠️ Installation
Prerequisites
Node.js (v14 or higher)
MongoDB Database
Clone the Repository
bash
Copy
Edit
git clone https://github.com/Maclinz/taskfyer.git
cd taskfyer
Setup Environment Variables
Create a .env file in the root directory and add the following:

env
Copy
Edit
MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
PORT=8000
Install Dependencies
Backend:

bash
Copy
Edit
cd backend
npm install
Frontend:

bash
Copy
Edit
cd ../client
npm install
Run the Application
Backend:

bash
Copy
Edit
cd backend
npm run dev
Frontend:

bash
Copy
Edit
cd ../client
npm run dev
The frontend will be available at http://localhost:3000 and the backend at http://localhost:8000.
