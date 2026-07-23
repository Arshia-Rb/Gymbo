import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Classes from "./pages/Classes";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import { useState } from "react";
import MobileMenu from "./ui/MobileMenu";
import { MobileMenuContext } from "./context/MobileMenueContext";
import SignUp from "./pages/SignUp";
import { MembershipContext } from "./context/MembershipContext";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hasMembership, setHasMembership] = useState<boolean>(false);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <MembershipContext.Provider value={{ hasMembership, setHasMembership }}>
        <BrowserRouter>
          {isMenuOpen && <MobileMenu />}
          <Routes>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="classes" element={<Classes />} />
            <Route path="membership" element={<Membership />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />

            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </MembershipContext.Provider>
    </MobileMenuContext.Provider>
  );
}

export default App;
