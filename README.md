# 📝 Task Management System

It is a full-stack task management application designed to streamline your productivity. Built with a robust tech stack, it offers a seamless user experience for managing tasks efficiently.

![GitHub repo size](https://img.shields.io/github/repo-size/beadarshh/task-management-system)
![GitHub issues](https://img.shields.io/github/issues/beadarshh/task-management-system)
![GitHub stars](https://img.shields.io/github/stars/beadarshh/task-management-system?style=social)
![GitHub forks](https://img.shields.io/github/forks/beadarshh/task-management-system?style=social)

---

## 🚀 Tech Stack

### 🔧 Backend

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **JWT Authentication**
* **bcrypt** for hashing passwords
* **CORS**
* **dotenv**

### 🎨 Frontend

* **Next.js**
* **Tailwind CSS**
* **Axios**
* **React Router DOM**
* **Framer Motion** (for animations)

---

## ✨ Features

* 🔐 User Registration & Login (with optional email verification)
* 📌 Add, Edit, Delete Tasks
* 🗂️ Filter by completed/pending
* ✅ Mark tasks as complete/incomplete
* 📦 RESTful API design

---

## 🌐 Live URLs

| Platform     | URL                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------- |
| 🖥️ Frontend | [https://task-management-system-phi-eight.vercel.app](https://task-management-system-phi-eight.vercel.app)           |
| 🔧 Backend   | [https://task-management-system-backend-u01i.onrender.com](https://task-management-system-backend-u01i.onrender.com) |

---

## 📦 How to Run Locally

### Clone the repository

```bash
git clone https://github.com/beadarshh/task-management-system.git
cd task-management-system
```

---

### 🔨 Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/` directory and add:

```env
PORT=5000
MONGODB_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
CLIENT_URL=https://task-management-system-phi-eight.vercel.app
```

Start the backend server:

```bash
npm start
```

---

### 🎯 Frontend Setup

```bash
cd client
npm install
```

Inside `client/src/context/userCentext.js` make sure this is the server URL:

```js
const serverURL = "https://task-management-system-backend-u01i.onrender.com";
```

Start the frontend app:

```bash
npm run dev
```

---

## 🚀 Deployment Guide

### 🔧 Deploy Backend to Render

1. Go to [https://render.com](https://render.com) and sign in.
2. Click **"New Web Service"**.
3. Connect your GitHub repo.
4. Set root directory to `/server`.
5. Add environment variables:

   * `PORT`
   * `MONGODB_URI`
   * `JWT_SECRET`
   * `CLIENT_URL=https://task-management-system-phi-eight.vercel.app`
6. Use Node version `>=22.15.0` or downgrade `express-handlebars` to `7.0.7` if Render only supports `22.14.0`.
7. Use the deployed link in the frontend where API calls are done.

### 🌐 Deploy Frontend to Vercel

1. Go to [https://vercel.com](https://vercel.com) and log in.
2. Import the frontend project (`/client` folder).
3. Set environment variable (if any)
4. Use the deployed link in the backend as Client URL in the environment variables.
5. Now enjoy your project is running successfully on the deployed link!

---

## ⚠️ Notes

* Email verification is **optional** and not enforced.
* Make sure CORS settings on backend allow your Vercel frontend domain.

---

## 🤝 Contribution

Feel free to fork the repository, create pull requests, and open issues. All contributions are welcome!

---

## 📧 Contact

For queries, reach out via GitHub or email: `aadarshpandey9@gmail.com`

---

⭐️ Don't forget to star the repo if you find it useful!
