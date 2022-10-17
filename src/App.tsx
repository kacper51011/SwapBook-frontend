import "./App.css";
import LoginWindow from "./components/LoginWindow";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BooksForSwapPage from "./Pages/BooksForSwapPage";
import BookItem from "./components/BookItem";
import Account from "./ProtectedPages/Account";
import MyRequests from "./ProtectedPages/AccountSubPages/MyRequests";
import Messages from "./ProtectedPages/AccountSubPages/Messages";
import ProtectedPagesContainer from "./ProtectedPages/ProtectedPagesContainer";
import Footer from "./components/Footer";
import SendMessage from "./ProtectedPages/AccountSubPages/SendMessage";
import Settings from "./ProtectedPages/AccountSubPages/Settings";
import Profile from "./ProtectedPages/AccountSubPages/Profile";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        {/* Pages without protection */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Books" element={<BooksForSwapPage />} />
        {/*  Protected pages*/}
        <Route element={<ProtectedPagesContainer />}>
          <Route path="/Account" element={<Account />}>
            <Route path="MyRequests" element={<MyRequests />}></Route>
            <Route path="SendMessage" element={<SendMessage />}></Route>
            <Route path="Messages" element={<Messages />}></Route>
            <Route path="Settings" element={<Settings />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
          </Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
