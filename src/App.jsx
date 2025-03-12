import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import SupportPatients from "./pages/SupportPatients.jsx";
import EarlySymptoms from "./pages/EarlySymptoms.jsx";
import WhatIsAlzheimer from "./pages/WhatIsAlzheimer.jsx";
import PreventionTreatment from "./pages/PreventionTreatment.jsx";

function App() {
  const location = useLocation(); // ✅ This works because <BrowserRouter> is in main.jsx
  const hideNavbarRoutes = ["/login", "/register","/SupportPatients","/EarlySymptoms","/WhatIsAlzheimer","/PreventionTreatment"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (

    <div>
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SupportPatients" element={<SupportPatients/>} />
        <Route path="/EarlySymptoms" element={<EarlySymptoms/>} />
        <Route path="/WhatIsAlzheimer" element={<WhatIsAlzheimer/>} />
        <Route path="/PreventionTreatment" element={<PreventionTreatment/>} />

      </Routes>
    </div>
  );
}

export default App;
