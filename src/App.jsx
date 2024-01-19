import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Blogs from "./pages/Blog/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ResetPassword from "./pages/Auth/resetPassword";
import ForgotPassword from "./pages/Auth/forgotPassword";
import Terms from "./pages/Misc/Terms";
import Privacy from "./pages/Misc/Privacy";
import Create from "./pages/Blog/Create";
import Details from "./pages/Blog/Details";
import ScrollToTop from "./components/BackToTop";
import Profile from "./pages/Auth/Profile";
import Categories from "./pages/Blog/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTopOnPageChange />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/article/:id" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/reset/password/:token" element={<ResetPassword />} />
          <Route path="/privacy_policy" element={<Privacy />} />
          <Route path="/terms_of_service" element={<Terms />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update_profile" element={<Details />} />
          <Route path="/categories/:category" element={<Categories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
