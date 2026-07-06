import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Classes from "./pages/Classes";
import Membership from "./pages/membership";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="classes" element={<Classes />} />
        <Route path="membership" element={<Membership />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
