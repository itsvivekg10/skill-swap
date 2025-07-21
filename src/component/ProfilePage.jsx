import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import { Share2, MoveRight } from "lucide-react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { saveProfile } from "../slice/profileSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
   const headingStyle = {
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "700",
    background: "linear-gradient(to right, #9333ea, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginLeft: "450px",
  };
  const [user, setUser] = useState(undefined);
  const [name, setName] = useState("");
  const [skillA, setSkillA] = useState("");
  const [skillB, setSkillB] = useState("");
  const [about, setAbout] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState("");
const dispatch  = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) setUser(currentUser);
      else setUser(null);
    });

    return () => unsubscribe();
  }, []);

  if (user === undefined) return <p>Loading...</p>;
  if (user === null) return <Navigate to="/reg" replace />;

  // Handle image input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email: user.email,
      about,
      role,
      skillA,
      skillB,
      image,
    };
    console.log("Submitted User Data:", formData);
 dispatch(saveProfile({ uid: user.uid, profile: formData }));
 navigate("/dash")
    // TODO: You can now send `formData` to Firebase or Firestore.
  };

  return (
    <form className="profile-container" onSubmit={handleSubmit}>
      {/* Sidebar */}
      <div className="sidebar">
        <label htmlFor="imageUpload">
          <img
            src={imagePreview || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
            alt="Profile"
            className="profile-pic"
            style={{ cursor: "pointer" }}
          />
        </label>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
        <h4 className="username">{user.email}</h4>
        <p className="role">{role}</p>
        <h3>About Me :</h3>
        <textarea
          placeholder="Write something about yourself..."
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="about-textarea"
        />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 style={headingStyle}>
          <span
            style={{
              background: "linear-gradient(to right, #9333ea, #3b82f6)",
              color: "white",
              width: "40px",
              textAlign: "center",
              borderRadius: "9px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Share2 size={24} />
          </span>
          SkillSwap
        </h2>
        <div className="form-group">
          <h3>Name :</h3>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="stats">
          <div className="stat-box">
            <h3>Skills you can teach :</h3>
            <select value={skillA} onChange={(e) => setSkillA(e.target.value)}>
              <option value="">-- Select Skill --</option>
              <option value="webDev">Web Development</option>
              <option value="mobileDev">Mobile Development</option>
              <option value="webDesign">Web Design</option>
              <option value="accounting">Accounting</option>
              <option value="trading">Trading</option>
              <option value="videoEditing">Video Editing</option>
            </select>
          </div>

          <div className="stat-box">
            <h3>Skills you want to learn :</h3>
            <select value={skillB} onChange={(e) => setSkillB(e.target.value)}>
              <option value="">-- Select Skill --</option>
              <option value="webDev">Web Development</option>
              <option value="mobileDev">Mobile Development</option>
              <option value="webDesign">Web Design</option>
              <option value="accounting">Accounting</option>
              <option value="trading">Trading</option>
              <option value="videoEditing">Video Editing</option>
            </select>
          </div>

          <div className="stat-box">
            <h3>Role :</h3>
            <input
              type="text"
              placeholder="e.g. Student, Mentor"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>

        <button className="contact-btn" type="submit">
          START <MoveRight size={18} />
        </button>
      </div>
    </form>
  );
};

export default ProfilePage;
