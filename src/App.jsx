import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import SupportPatients from "./pages/SupportPatients.jsx";
import EarlySymptoms from "./pages/EarlySymptoms.jsx";
import WhatIsAlzheimer from "./pages/WhatIsAlzheimer.jsx";
import PreventionTreatment from "./pages/PreventionTreatment.jsx";
import UploadPageInitial from "./pages/UploadPageInitial.jsx";
import UploadCompletePage from "./pages/UploadCompletePage.jsx";
import ReportPage from "./pages/ReportPage.jsx";

function App() {
  const location = useLocation(); 
  const hideNavbarRoutes = ["/login", "/register","/SupportPatients","/EarlySymptoms","/WhatIsAlzheimer","/PreventionTreatment"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SupportPatients" element={<SupportPatients />} />
        <Route path="/EarlySymptoms" element={<EarlySymptoms />} />
        <Route path="/WhatIsAlzheimer" element={<WhatIsAlzheimer />} />
        <Route path="/PreventionTreatment" element={<PreventionTreatment />} />
        <Route path="/UploadPageInitial" element={<UploadPageInitial />} />
        <Route path="/upload-complete" element={<UploadCompletePage />} />
        <Route path="/report-page" element={<ReportPage />} />
      </Routes>
    </div>
  );
}

export default App;
