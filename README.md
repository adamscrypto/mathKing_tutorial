# 📘 Maths Tutorial Website

A modern web application built with React, Firebase, and TailwindCSS to provide high-quality math tutorials. The platform supports video and text-based learning across various mathematics topics, featuring an intuitive admin panel for content upload and user authentication.

# Features
- 📚 **Topics and Subtopics**: Organized by math topics and subtopics.
- 🎥 **Video Tutorials**: Embedded YouTube videos for each subtopic.
- 📝 **Text Lessons**: Supplementary explanations and lesson notes.
- 🔐 **Admin Authentication**: Admins can log in to manage content (email/password-based).
- 📦 **Firebase Integration**: Real-time database and authentication using Firebase.
- 🌈 **Modern UI**: Built with TailwindCSS for a responsive and clean design.
- 🔍 **Search/Filter**: Easily find relevant topics or videos.
- ⚙️ **Routing**: Seamless navigation using React Router DOM.



# Tech Stack
- Frontend: React, Vite
- Styling: Tailwind CSS
- Backend: Firebase (Auth, Firestore, Storage)
- Routing: React Router
- State Management: React Hooks (`useState`, `useEffect`)
- Deployment: (Netlify)

# 📂 Project Structure

├── public/
├── src/
│ ├── components/
│ │ ├── ui/ # Reusable UI components (Card, Button, Input)
│ │ ├── auth/ # PrivateRoute and auth logic
│ │ └── VideoPlayer.jsx # YouTube embed component
│ ├── pages/ # Route components (Home, Topics, Admin, Login)
│ ├── firebase.js # Firebase config and initialization
│ ├── App.jsx # App root with routing
│ └── main.jsx # React entry point
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md

# Configure Firebase
Create a Firebase project and enable
Email/password authentication
Firestore Database
Firebase Storage (optional for files)
Then, create a firebase.js file in src/

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

# Run the Development Server
npm run dev

# 🔐 Default Admin Login
You must manually register an admin account in Firebase Authentication or seed it via Firestore. The app uses Firebase's signInWithEmailAndPassword method.

