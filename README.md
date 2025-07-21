# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Skill Swap
🧠 Introduction
Skill Swap is a full-stack web application that connects individuals looking to learn and teach various skills. Users can create profiles, list the skills they offer and want to learn, send friend requests, chat, and schedule learning sessions. The goal is to promote collaborative peer-to-peer learning through skill exchange.

📦 Project Type
front-end

Frontend: React.js,  CSS

Backend: Firebase (Firestore, Auth)

Deployment: Vercel

🔗 Deployed App
Frontend:(https://skill-swap-7v22.vercel.app/

Backend: Firebase (Firestore & Authentication)

Database Console: https://console.firebase.google.com

📁 Directory Structure
bash
Copy
Edit
skill-swap/
├── frontend/      # React.js client
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
├── firebase/      # Firebase setup & rules
└── README.md

✨ Features
🔐 User Authentication (Firebase)

🧑‍🎓 Skill Matching based on "Learn" and "Teach" tags

🤝 Send & Accept Friend Requests

💬 Real-time Chat (Firebase)

📆 Schedule Live Sessions with Meet Links

📲 Responsive UI for  desktop 

📐 Design Decisions / Assumptions
Used Firebase for its real-time updates and quick setup for Auth + Firestore

Meet link is manually inputted instead of generating one dynamically

Assumed users are authenticated before accessing dashboard features

Profile data includes: name, bio, skillsToTeach, skillsToLearn, frndReq, frnds, sessions

🚀 Installation & Getting Started
Prerequisites


Firebase account

Frontend Setup
bash
Copy
Edit
git clone https://github.com/your-username/skill-swap.git
cd skill-swap/frontend
npm install
npm run dev
Firebase Setup
Go to Firebase Console

Enable Authentication (Email/Password)

Enable Cloud Firestore

Add your Firebase config to firebase.js file in frontend/src/firebase.js


Register/Login

Create profile with skills to teach/learn

Browse suggested friends

Send/Accept friend requests

Start chatting

Schedule sessions

