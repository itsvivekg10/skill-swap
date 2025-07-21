import {
  User2,
  Medal,
  Star,
  BookOpenText,
  Calendar,
  Filter,
  Search,
  MessageSquare,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { useEffect } from "react";
import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
const HomeDash = ({allData,userData,frndSugg,notification,setNotification}) => {
  const [frndSuggList, setFrndSuggList] =useState([])
  useEffect(() => {
  if (frndSugg?.length && userData) {
    const connectedIds = new Set(userData?.frndList?.map((f) => f.id));
    const sentReqIds = new Set(userData?.frndReq?.map((f) => f.id));
const sendReq = new Set(userData?.sentReq?.map((f)=>f.id))
    const filtered = frndSugg.filter(
      (f) => !connectedIds.has(f.id) && !sentReqIds.has(f.id)&&!sendReq.has(f.id)
    );

    setFrndSuggList(filtered);
  }
}, [frndSugg, userData]);

    //  console.log("this session",userData.frndList.SessionList)
  
  console.log(allData)
  console.log("from home frndSugg",frndSugg)  
  const cardStyle = {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(6px)",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };
const cardStyle1 = {
    padding: "24px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(8px)",
    border: "none",
    borderRadius: "12px",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  };
  const iconBoxStyle = (gradient) => ({
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    background: gradient,
    fontSize: "24px",
  });

  const cardHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const headingStyle = {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#111827",
  };

  const btnOutline = {
    border: "1px solid #ccc",
    background: "white",
    padding: "0.5rem 1rem",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const btnPrimary = {
    background: "linear-gradient(to right, #7c3aed, #2563eb)",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    cursor: "pointer",
    border: "none",
  };

  const iconStyle = {
    marginRight: "0.5rem",
  };

  const textMuted = {
    color: "#6b7280",
    fontSize: "0.875rem",
  };

  const textSmall = {
    fontSize: "0.9rem",
    color: "#111827",
  };

  const textTiny = {
    fontSize: "0.75rem",
    color: "#9ca3af",
    marginTop: "0.25rem",
  };

  const textBold = {
    fontWeight: "bold",
    fontSize: "1rem",
  };

  const avatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  };

  const sessionItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f9fafb",
    padding: "1rem",
    borderRadius: "8px",
    marginBottom: "1rem",
  };

  const badgeStyle = (type) => ({
    backgroundColor: type === "teaching" ? "#6366f1" : "#e5e7eb",
    color: type === "teaching" ? "white" : "#374151",
    padding: "0.2rem 0.5rem",
    fontSize: "0.75rem",
    borderRadius: "6px",
    fontWeight: "bold",
    display: "inline-block",
  });

  const progressLabel = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.25rem",
    fontSize: "0.875rem",
  };

  const progressBar = {
    backgroundColor: "#e5e7eb",
    height: "8px",
    borderRadius: "8px",
    overflow: "hidden",
    marginBottom: "1rem",
  };
const sidebarStyle = {
  position: "fixed",
  top: "65px",
  left: 0,
  width: "300px",
  height: "90vh",
  backgroundColor: "#ffffff",
  boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
  padding: "24px",
  zIndex: 1000,
  transition: "transform 0.3s ease-in-out",
  transform: notification ? "translateX(0)" : "translateX(-100%)",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 999,
};

  const progressFill = (color) => ({
    background: color,
    height: "100%",
    borderRadius: "8px",
  });

  const upcomingSessions = [
    {
      id: 1,
      partner: "Alice Johnson",
      skill: "ReactJS",
      time: "10:00 AM, July 20",
      type: "teaching",
    },
    {
      id: 2,
      partner: "Bob Smith",
      skill: "Python",
      time: "3:30 PM, July 21",
      type: "learning",
    },
  ];

    

  const notifications = [
    { id: 1, message: "You have a new match with Tom Hanks.", time: "2 hours ago" },
    { id: 2, message: "Session with Alice Johnson confirmed.", time: "1 day ago" },
  ];

//////
// const [request,sentRequest]=useState(null)


async function requestSend(matchUser) {
  const userRef = doc(db, "profiles", matchUser.id); // current user profile doc
   const useReff = doc(db,"profiles",userData.id)
  try {
    const userSnap = await getDoc(userRef);
const userSnapp = await getDoc(useReff)
    if (userSnap.exists()&& userSnapp.exists()) {
      const userDataFromDB = userSnap.data();
      const existingRequests = userDataFromDB.frndReq || [];
  const userDataFromDBb = userSnapp.data();
      const existingRequestss = userDataFromDBb.sentReq || [];
      // Avoid duplicate entries
      const alreadyRequested = existingRequests.some(req => req.id === userData.id);
       const alreadyRequestedd = existingRequestss.some(req => req.id === matchUser.id);
      if (alreadyRequested&&alreadyRequestedd) {
        alert("You have already sent a request to this user.");
        return;
      }

      const updatedRequests = [...existingRequests, userData];
      const updatedSentReq =[...existingRequestss,matchUser]
      await updateDoc(userRef, { frndReq: updatedRequests });
       await updateDoc(useReff, { sentReq: updatedSentReq });
      alert("Request sent successfully.");
      let res = frndSugg.filter((ele)=>ele.id !==matchUser.id) 
      
setFrndSuggList(res)
    } else {
      // If user profile doesn't exist in db, create it with frndReq array
      await setDoc(userRef, {
        ...userData,
        frndReq: [matchUser]
      });
      alert("Request sent and profile created.");
    }
  } catch (error) {
    console.error("Error sending request:", error);
    alert("Failed to send request.");
  }
}
// function filterData (){
// let res = 
console.log("jjj",frndSuggList)
// }
async function acceptFrnd(matchUser) {
   const userRef = doc(db, "profiles", matchUser.id); // current user profile doc
   const useReff = doc(db,"profiles",userData.id)
  try {
     const userSnap = await getDoc(userRef);
const userSnapp = await getDoc(useReff)
    if ( userSnapp.exists()) {
       const userDataFromDB = userSnap.data();
       const existingRequests = userDataFromDB.frndList || [];
  const userDataFromDBb = userSnapp.data();
      const existingRequestss = userDataFromDBb.frndList || [];
      // Avoid duplicate entries
      const alreadyRequested = existingRequests.some(req => req.id === userData.id);
       const alreadyRequestedd = existingRequestss.some(req => req.id === matchUser.id);
      if (alreadyRequestedd &&alreadyRequested) {
        alert("You have already sent a request to this user.");
        return;
      }

      const updatedRequests = [...existingRequests, userData];
      const updatedSentReq =[...existingRequestss,matchUser]
      await updateDoc(userRef, { frndList: updatedRequests });
       await updateDoc(useReff, { frndList: updatedSentReq });
      alert("add successfully.");
      let res = frndSugg.filter((ele)=>ele.id !==matchUser.id) 
      
setFrndSuggList(res)
    } else {
      // If user profile doesn't exist in db, create it with frndReq array
      await setDoc(userRef, {
        ...userData,
        frndReq: [matchUser]
      });
      alert("Request sent and profile created.");
    }
  } catch (error) {
    console.error("Error sending request:", error);
    alert("Failed to send request.");
  }
}
// let matchRes = allData.find((ele)=>ele.skillA==userData.skillB&&ele.skillB==userData.skillA)
// console.log(matchRes)
  return (
    <div style={{ maxWidth: "100%", margin: "0 auto", padding: "32px 16px" ,backgroundImage:"linear-gradient(to right, #faf9fcff, #eceff7ff)"}}>
      {/* Welcome Section */}
      <div style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1f2937", marginBottom: "8px" }}>
          Welcome back, {userData.name}!
        </h1>
        <p style={{ color: "#4b5563" }}>Here's what's happening with your learning journey today.</p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          marginBottom: "32px",
        }}
      >
        <div style={cardStyle1}>
          <div>
            <p style={textMuted}>Active Exchanges</p>
            <p style={textBold}>12</p>
          </div>
          <div style={iconBoxStyle("linear-gradient(to right, #3b82f6, #8b5cf6)")}>
            <User2 />
          </div>
        </div>

        <div style={cardStyle1}>
          <div>
            <p style={textMuted}>Skills Learning</p>
            <p style={textBold}>5</p>
          </div>
          <div style={iconBoxStyle("linear-gradient(to right, #10b981, #3b82f6)")}>
            <BookOpenText />
          </div>
        </div>

        <div style={cardStyle1}>
          <div>
            <p style={textMuted}>Skills Teaching</p>
            <p style={textBold}>7</p>
          </div>
          <div style={iconBoxStyle("linear-gradient(to right, #8b5cf6, #ec4899)")}>
            <Medal />
          </div>
        </div>

        <div style={cardStyle1}>
          <div>
            <p style={textMuted}>Rating</p>
            <p style={textBold}>4.9</p>
          </div>
          <div style={iconBoxStyle("linear-gradient(to right, #f59e0b, #f97316)")}>
            <Star />
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "2fr 1fr" }}>
          {/* Main Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Upcoming Sessions */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={headingStyle}>Upcoming Sessions</h2>
                <button style={btnOutline}>
                  <Calendar size={16} style={iconStyle} /> View All
                </button>
              </div>

              {upcomingSessions.map((session) => (
                <div key={session.id} style={sessionItemStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={avatarStyle}>
                      {session.partner.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p style={textBold}>{session.partner}</p>
                      <p style={textMuted}>{session.skill}</p>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={badgeStyle(session.type)}>
                      {session.type === "teaching" ? "Teaching" : "Learning"}
                    </span>
                    <p style={textMuted}>{session.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Matches */}
            <div style={cardStyle}>
              <div style={cardHeaderStyle}>
                <h2 style={headingStyle}>New Skill Matches</h2>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button style={btnOutline}>
                    <Filter size={16} style={iconStyle} /> Filter
                  </button>
                  <button style={btnOutline}>
                    <Search size={16} style={iconStyle} /> Search
                  </button>
                </div>
              </div>

              { frndSuggList.map((match) => (
                <div key={match.id} style={sessionItemStyle}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={avatarStyle}>
                      {match.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p style={textBold}>{match.name}</p>
                      <p style={textMuted}>
                        Wants:{" "}{match.skillB}
                        <span style={{ color: "purple", fontWeight: 500 }}>{match.wants}</span> • Offers:{" "}{match.skillA}
                        <span style={{ color: "blue", fontWeight: 500 }}>{match.offers}</span>
                      </p>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <Star size={16} style={{ color: "gold" }} />
                        <span style={textMuted}>{match.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button style={btnOutline}>View Profile</button>
                    <button onClick={()=>requestSend(match)} style={btnPrimary}>Connect</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
           {notification && (
  <>
    <button style={overlayStyle} onClick={() => setNotification(false)}></button>
    <div
      style={sidebarStyle}
      onClick={(e) => e.stopPropagation()} // prevents sidebar click from closing it
    >
      <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>Notifications</h2>
      {userData.frndReq.map((n) => (
        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px",
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    backgroundColor: "#f9fafb",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    marginBottom: "16px",
    maxWidth: "400px",
  }}
>
  {/* Avatar Circle */}
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#d1d5db",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      color: "#374151",
      fontSize: "16px",
      textTransform: "uppercase",
      flexShrink: 0,
    }}
  >
    {n.name.split(" ").map((n) => n[0]).join("")}
  </div>

  {/* User Info and Buttons */}
  <div style={{ flex: 1 }}>
    <p style={{ fontWeight: "bold", fontSize: "14px", color: "#1f2937", margin: 0 }}>
      {n.name}
    </p>

    <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
      <button
        style={{
          padding: "6px 12px",
          backgroundColor: "#e5e7eb",
          border: "1px solid #d1d5db",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "13px",
          color: "#374151",
        }}
      >
        View Profile
      </button>

      <button
        style={{
          padding: "6px 12px",
          background: "linear-gradient(to right, #10b981, #3b82f6)",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "13px",
          color: "white",
        }}
     onClick={()=>acceptFrnd(n)} >
        Accept
      </button>
    </div>
  </div>
</div>

      ))}
    </div>
  </>
)}

            {/* Notifications */}
            <div style={cardStyle}>
              <h3 style={headingStyle}>Recent Activity</h3>
              {notifications.map((n) => (
                <div key={n.id} style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "purple",
                      borderRadius: "50%",
                      marginTop: "0.4rem",
                    }}
                  ></div>
                  <div>
                    <p style={textSmall}>{n.message}</p>
                    <p style={textTiny}>{n.time}</p>
                  </div>
                </div>
              ))}
              <button style={{ ...btnOutline, width: "100%", marginTop: "1rem" }}>
                View All Notifications
              </button>
            </div>

            {/* Progress */}
            <div style={cardStyle}>
              <h3 style={headingStyle}>Learning Progress</h3>
              {[
                { label: "React Development", value: 75, color: "#7e22ce" },
                { label: "Spanish", value: 45, color: "#22c55e" },
                { label: "Guitar", value: 30, color: "#facc15" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div style={progressLabel}>
                    <span style={textMuted}>{item.label}</span>
                    <span style={{ fontWeight: "bold" }}>{item.value}%</span>
                  </div>
                  <div style={progressBar}>
                    <div style={{ ...progressFill(item.color), width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div style={cardStyle}>
              <h3 style={headingStyle}>Quick Actions</h3>
              {[
                { icon: <MessageSquare size={16} style={iconStyle} />, text: "Message Community" },
                { icon: <BookOpen size={16} style={iconStyle} />, text: "Browse Resources" },
                { icon: <TrendingUp size={16} style={iconStyle} />, text: "Skill Assessment" },
              ].map((action, idx) => (
                <button key={idx} style={{ ...btnOutline, width: "100%", justifyContent: "flex-start" }}>
                  {action.icon}
                  {action.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDash;
