# Taskfyer - Task Management System

Welcome to **Taskfyer**, your personal Task Management System designed to simplify task tracking and boost productivity. Built using modern web technologies with clean architecture and modular design.

---

## 🚀 Features

* 🧑‍💼 User Authentication (with optional Email Verification)
* 🗂️ Create, Update, Delete Tasks
* ✅ Mark Tasks as Completed
* 📁 Organized UI with Sidebar Navigation
* 🔐 Protected Routes (for authenticated users)
* 🎨 Responsive and Glassmorphism UI

---

## 🛠 Tech Stack

**Frontend:**

* Next.js 14 (App Router)
* React 18+
* Tailwind CSS
* TypeScript

**Backend:**

* Node.js
* MongoDB (via Mongoose)
* NextAuth.js (Authentication)

**Deployment:**

* Vercel (Frontend)
* MongoDB Atlas (Database)

---

## 🧩 Project Structure

```
├── app
│   ├── Components     # Reusable UI components
│   ├── api            # API routes
│   ├── dashboard      # Authenticated dashboard
│   └── login / signup # Auth pages
├── context            # React Context API (e.g. User, Task)
├── providers          # Context Providers
├── utils              # Utility functions
├── public             # Static assets (images, icons)
├── styles             # Global CSS (Tailwind)
└── .env               # Environment variables
```

---

## 🧪 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/beadarshh/task-management-system.git
cd task-management-system
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file:

```env
MONGODB_URI=<your-mongodb-uri>
NEXTAUTH_SECRET=<your-nextauth-secret>
NEXTAUTH_URL=http://localhost:3000
```

### 4. Run the App

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000`

---

## 🔒 Optional Features

* **Email Verification** is **optional** and can be enabled with a mail provider like Resend, SendGrid, etc.
* You can customize your own themes and task categories.

---

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 Live Demo

**[Check out the live app](https://taskfyer.vercel.app)**
