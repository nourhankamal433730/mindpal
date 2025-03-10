import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";

function App() {
  const location = useLocation(); // ✅ This works because <BrowserRouter> is in main.jsx
  const hideNavbarRoutes = ["/login", "/register"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    /** ✅ Wrap everything in a valid parent element (a `div` in this case) */
    <div>
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
