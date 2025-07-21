import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import DashNav from '../DashBoardComponent/DashNav.jsx';
import HomeDash from '../DashBoardComponent/HomeDash.jsx';
import { db, auth } from '../firebase';
import { Loader } from 'lucide-react';
import Community from '../DashBoardComponent/Community.jsx'
import Session from '../DashBoardComponent/Session.jsx';

const DashBoard = () => {
  const [user, setUser] = useState(undefined);
  const [allData, setAllData] = useState([]); // To hold all data from DB
  const [userData, setUserData] = useState([])
  const [frndSugg, setFrndSugg] = useState([])
  const [notification, setNotification] = useState(false)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        try {
          // 🔥 Fetch all documents from 'users' collection
          const querySnapshot = await getDocs(collection(db, 'profiles'));

          const dataArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));

          setAllData(dataArray);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }

      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  // console.log("this",user.email)
  useEffect(() => {
    if (user && user.email && allData.length > 0) {
      console.log("user.email:", user.email);
      console.log("allData:", allData);

      allData.forEach((ele, i) => {
        console.log(`ele[${i}].email:`, ele.email);
      });

      const res = allData.find(
        (ele) => ele.email?.toLowerCase().trim() === user.email?.toLowerCase().trim()
      );

      if (res) {
        setUserData(res);
        console.log("✅ Found Firestore user profile:", res);

      } else {
        console.warn("❌ No matching user profile found in Firestore.");
      }
    }
  }, [user, allData]);
  useEffect(() => {
    if (
      user &&
      userData?.skillA &&
      userData?.skillB &&
      allData.length > 0
    ) {
      const suggestion = allData.filter(
        (ele) =>
          ele.email?.toLowerCase().trim() !== user.email?.toLowerCase().trim() &&
          ele.skillA === userData.skillB &&
          ele.skillB === userData.skillA
      );

      if (suggestion) {
        setFrndSugg(suggestion);
        console.log('🎯 Friend suggestion:', suggestion);
      }
    }
  }, [userData, allData, user]);

  console.log("this is d", userData)
  console.log("this is frnd", frndSugg)
  if (user === undefined)
    return (
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Loader className="animate-spin" size={48} />
      </div>
    );
  if (user === null) return <Navigate to="/reg" replace />;

  console.log("All Firestore Data:", allData);

  return (
    <div>
      <DashNav setNotification={setNotification} notification={notification} />
      <Routes>
        <Route path="/" element={<HomeDash allData={allData} userData={userData} frndSugg={frndSugg} notification={notification} setNotification={setNotification} />} />
        <Route path='comm' element={<Community userData={userData} />} />
        <Route path="session" element={<Session userData={userData}/>}/>
      </Routes>
    </div>
  );
};

export default DashBoard;
