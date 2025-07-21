import React, { useState, useEffect } from "react";
import { Bell, Settings, Share2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const DashNav = ({notification,setNotification}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItemsStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "1rem",
  };

  const navStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.25rem",
  };

  const flexStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4rem",
  };

  const leftGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  };

  const logoGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  };

  const logoBoxStyle = {
    width: "2rem",
    height: "2rem",
    background: "linear-gradient(to right, #9333ea, #3b82f6)",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const logoTextStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #9333ea, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const rightGroupStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  };

  const iconBtnStyle = {
    padding: "0.5rem",
    borderRadius: "9999px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    position: "relative",
    transition: "background 0.2s",
  };

//   const iconHoverStyle = {
//     ...iconBtnStyle,
//     ":hover": {
//       background: "#e0dbdbff",
//     },
//   };

  const bellIconBadge = {
    position: "absolute",
    top: "2px",
    right: "2px",
    width: "0.65rem",
    height: "0.65rem",
    backgroundColor: "red",
    borderRadius: "9999px",
  };

  const navBtnStyle = {
    padding: "0.4rem 0.9rem",
    background: "transparent",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.795rem",
    cursor: "pointer",
    transition: "all 0.2s",
    fontWeight:"bold",
    color:"#565657ff"
  };
function openNotifi(){
if(notification){
  setNotification(false)
}else{
  setNotification(true)
}
}
console.log(notification)
  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={flexStyle}>
          {/* Left */}
          <div style={leftGroupStyle}>
            <div style={logoGroupStyle}>
              <div style={logoBoxStyle}>
                <Share2 style={{ width: "1.25rem", height: "1.25rem", color: "white" }} />
              </div>
              <span style={logoTextStyle}>SkillSwap</span>
            </div>
 {/* <Routes>
        <Route path="/" element={<HomeDash allData={allData} userData={userData} frndSugg={frndSugg} notification={notification} setNotification={setNotification} />} />
        <Route path='comm' element={<Community userData={userData} />} />
      </Routes> */}
            <div style={navItemsStyle}>
              <Link to="/Dash/"style={navBtnStyle}>Dashboard</Link>
              <Link style={navBtnStyle}>Find Skills</Link>
              <Link to="/Dash/session" style={navBtnStyle}>My Sessions</Link>
              <Link to="/Dash/comm" style={navBtnStyle}>Community</Link>
            </div>
          </div>

          {/* Right */}
          <div style={rightGroupStyle}>
            <button onClick={openNotifi} style={iconBtnStyle}>
              <Bell style={{ width: "1.25rem", height: "1.25rem" }} />
              <div style={bellIconBadge}></div>
            </button>
            <button style={iconBtnStyle}>
              <Settings style={{ width: "1.25rem", height: "1.25rem" }} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
    