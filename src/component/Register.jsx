
import { LogIn, Share2 } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { loginimg } from '../assets/loginimg'; // Ensure this is a valid image import
import { useSelector,useDispatch } from 'react-redux';
import { registerThunk } from '../slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const wrapperStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  };

  const loginBoxStyle = {
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    width: '80%',
    maxWidth: '900px',
    backgroundColor: '#fff',
    overflow: 'hidden',
  };

  const leftStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
  };

 

  const rightStyle = {
    flex: 1,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const headingStyle = {
    marginBottom: '30px',
    fontSize: '28px',
    fontWeight: '700',
    background: 'linear-gradient(to right, #9333ea, #3b82f6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const inputStyle = {
    marginBottom: '20px',
    padding: '12px 16px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    outline: 'none',
    width: '100%',
    maxWidth: '300px',
  };

  const buttonStyle = {
    padding: '12px',
    fontSize: '16px',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '10px',
    backgroundImage: 'linear-gradient(to right, #9333ea, #3b82f6)',
    width: '100%',
    maxWidth: '300px',
  };

  const linkStyle = {
    marginTop: '15px',
    color: '#6b7280',
    fontSize: '14px',
    textAlign: 'center',
    textDecoration: 'none',
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const dispatch = useDispatch()
const {status,error} = useSelector((state)=>state.auth)
const navigate = useNavigate()
function submitHandler(e) {
  console.log("done")
  e.preventDefault(); // ✅ Correct: now it prevents form reload
   dispatch(registerThunk({ email, password }));
   navigate("/profile")
setEmail(" ")
setPassword(" ")
  
}

  return (
    <div style={wrapperStyle}>
      <div style={loginBoxStyle}>
        <div style={leftStyle}>
          <h2 style={headingStyle}>
       <span
  style={{
    background: 'linear-gradient(to right, #9333ea, #3b82f6)',
    color: 'white',
    width: '40px',
    textAlign: 'center',
    borderRadius: '9px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <Share2 size={24} />
</span>

            SkillSwap
          </h2> 
        </div>
        <div style={rightStyle} >
         <h2>Register</h2>
         <form action="submit" onSubmit={submitHandler} >
          <input type="text" placeholder="Your username or email address" style={inputStyle} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Your password" style={inputStyle} onChange={(e)=>setPassword(e.target.value)}/>
          
          <button style={buttonStyle} type='submit'>SIGN IN</button>

          </form>
          {status !=="idle"&& <p>{status}</p>}
           {error && <p style={{ color: "red" }}>{error}</p>}
          <Link to="/login" style={linkStyle}>
      Already have account ? login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
