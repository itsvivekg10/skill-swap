import React, { useState } from 'react';
import { db } from '../firebase';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { Calendar } from 'lucide-react';

const Session = ({ userData }) => {
    console.log(userData)
  const [sessions, setSessions] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    meetLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description, date, meetLink } = form;

    if (!title || !description || !date || !meetLink) {
      alert('Please fill all fields');
      return;
    }

    const newSession = {
      id: Date.now(),
      ...form,
    };

    setSessions((prev) => [newSession, ...prev]);
    setForm({ title: '', description: '', date: '', meetLink: '' });

    // Save to Firestore
    await addSession(newSession, userData);
  };

  async function addSession(sessionData, userData) {
    const userRef = doc(db, "profiles", userData.id);

    try {
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userDataFromDB = userSnap.data();
        const existingSessions = userDataFromDB.SessionList || [];

        // Avoid duplicate session ID
       

        const updatedSessions = [...existingSessions, sessionData];
        await updateDoc(userRef, { SessionList: updatedSessions });

        alert("Session added successfully.");
      } else {
        console.log("User not found.");
      }
    } catch (err) {
      console.error("Error adding session:", err);
    }
  }

  return (
    <div style={container}>
      {/* Sidebar */}
      <div style={sidebar}>
        <h2 style={sidebarTitle}>Settings</h2>
        <ul style={navList}>
          <li style={navItem}>Sessions</li>
          <li style={navItem}>Account</li>
          <li style={navItem}>Updates</li>
          <li style={navItem}>Payment</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={content}>
        {/* Create Session */}
        <div style={sectionCard}>
          <h3 style={sectionTitle}>Create a Session</h3>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="title"
              placeholder="Session Title"
              value={form.title}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              style={textareaStyle}
            />
            <input
              type="datetime-local"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="url"
              name="meetLink"
              placeholder="https://meet.google.com/abc-defg-hij"
              value={form.meetLink}
              onChange={handleChange}
              style={inputStyle}
            />
            <div style={{ display: "flex", gap: "20px" }}>
              <button type="submit" style={buttonStyle}>Create</button>
              <button type="button" style={buttonStyle}>Save Draft</button>
              <button type="button" style={buttonStyle}>Cancel</button>
            </div>
          </form>
        </div>

        {/* Display Sessions */}
        <div style={sectionCard}>
          <h3 style={sectionTitle}>My Sessions</h3>
          {sessions.length === 0 ? (
            <p style={emptyText}>No sessions yet.</p>
          ) : (
            sessions.map((s) => (
              <div key={s.id} style={sessionCard}>
                <div>
                  <h4 style={{ marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ marginBottom: 4 }}>{s.description}</p>
                  <p style={sessionDate}><Calendar/> {new Date(s.date).toLocaleString()}</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href={s.meetLink} target="_blank" rel="noopener noreferrer" style={meetBtn}>
                    Join Meet
                  </a>
                  <button style={editBtn}>Edit</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

// ------ Styles ------
const container = {
  display: 'flex',
  fontFamily: 'Segoe UI, sans-serif',
  minHeight: '100vh',
  backgroundColor: '#f9fafb',
};

const sidebar = {
  width: '220px',
  backgroundColor: '#fff',
  padding: '24px',
  borderRight: '1px solid #e5e7eb',
  position: "sticky",
};

const sidebarTitle = {
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '16px',
};

const navList = {
  listStyle: 'none',
  padding: 0,
};

const navItem = {
  padding: '10px 0',
  color: '#374151',
  fontWeight: '500',
  cursor: 'pointer',
};

const content = {
  flex: 1,
  padding: '40px',
};

const sectionCard = {
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  padding: '24px',
  marginBottom: '32px',
};

const sectionTitle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '16px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
};

const inputStyle = {
  padding: '12px',
  fontSize: '15px',
  borderRadius: '8px',
  border: '1px solid #d1d5db',
};

const textareaStyle = {
  ...inputStyle,
  height: '100px',
  resize: 'none',
};

const buttonStyle = {
  padding: '12px',
  fontSize: '15px',
  background: "linear-gradient(to right, #7c3aed, #2563eb)",
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
};

const emptyText = {
  color: '#6b7280',
  fontSize: '15px',
};

const sessionCard = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '16px',
  borderBottom: '1px solid #e5e7eb',
};

const sessionDate = {
  fontSize: '13px',
  color: '#6b7280',
  marginTop: '8px',
};

const meetBtn = {
  textDecoration: 'none',
  backgroundColor: '#2563eb',
  color: '#fff',
  padding: '6px 12px',
  borderRadius: '6px',
  fontSize: '14px',
};

const editBtn = {
  backgroundColor: 'transparent',
  color: '#10b981',
  border: '1px solid #10b981',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default Session;
