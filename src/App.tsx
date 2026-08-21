import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Classes from "./pages/Classes";
import Membership from "./pages/Membership";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import { useState } from "react";

import { MobileMenuContext } from "./context/MobileMenueContext";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import { MembershipContext } from "./context/MembershipContext";
import ScrollToTop from "./ui/ScrollToTop";
import Overlay from "./ui/Overlay";
import { AuthContext } from "./context/AuthContext";
import ProtectedRoute from "./ui/ProtectedRoute";

import { AnimatePresence, motion } from "motion/react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMembership, setHasMembership] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <MobileMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <MembershipContext.Provider value={{ hasMembership, setHasMembership }}>
          <BrowserRouter>
            <ScrollToTop />
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                >
                  <Overlay />
                </motion.div>
              )}
            </AnimatePresence>

            <Routes>
              <Route index element={<Home />} />
              <Route path="classes" element={<Classes />} />
              <Route element={<ProtectedRoute />}>
                <Route path="membership" element={<Membership />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="login" element={<Login />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route
                path="email-verification"
                element={<EmailVerification />}
              />
              <Route path="*" element={<PageNotFound />} />

              <Route path="about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </MembershipContext.Provider>
      </MobileMenuContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
