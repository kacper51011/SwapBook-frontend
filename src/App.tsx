import "./App.css";
import LoginWindow from "./components/LoginWindow";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BooksForSwapPage from "./Pages/BooksForSwapPage";
import Book from "./components/Book";
import Account from "./ProtectedPages/Account";
import MyOffers from "./ProtectedPages/MyOffers";
import MyRequests from "./ProtectedPages/MyRequests";
import Messages from "./ProtectedPages/Messages";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <LoginWindow />
      <Routes>
        {/* Pages without protection */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Books" element={<BooksForSwapPage />}></Route>
        {/*  Protected pages*/}
        <Route path="/Account" element={<Account />}></Route>
        <Route path="/MyOffers" element={<MyOffers />}></Route>
        <Route path="/MyRequests" element={<MyRequests />}></Route>
        <Route path="/Messages" element={<Messages />}></Route>
      </Routes>
    </div>
  );
}

export default App;
