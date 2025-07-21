import { Routes, Route } from "react-router-dom"
// import Nav from "./component/Nav"
// import { Home } from "lucide-react"
import Home from "./component/Home"
import Login from "./component/Login"
import Register from "./component/Register"
import ProfilePage from "./component/ProfilePage"
import { Provider } from "react-redux"
import { store } from "./store/store"
import DashBoard from "./component/DashBoard"

function App() {


  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/Dash/*" element={<DashBoard />} />
          
        </Routes>
      </Provider>
    </>
  )
}

export default App
