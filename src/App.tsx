import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BooksForSwapPage from "./Pages/BooksForSwapPage";
import Account from "./ProtectedPages/Account";
import MyRequests from "./ProtectedPages/AccountSubPages/MyRequests";
import Messages from "./ProtectedPages/AccountSubPages/Messages";
import ProtectedPagesContainer from "./ProtectedPages/ProtectedPagesContainer";
import Footer from "./components/Footer";
import SendMessage from "./ProtectedPages/AccountSubPages/SendMessage";
import Settings from "./ProtectedPages/AccountSubPages/Settings";
import Profile from "./ProtectedPages/AccountSubPages/Profile";
import CreateSwapOfferPage from "./ProtectedPages/CreateSwapOfferPage";
import BookDetails from "./Pages/BookDetails";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        {/* Pages without protection */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Books" element={<BooksForSwapPage />} />
        <Route path="/Books/:bookId" element={<BookDetails />} />
        {/*  Protected pages*/}
        <Route element={<ProtectedPagesContainer />}>
          <Route path="/Account" element={<Account />}>
            <Route path="MyRequests" element={<MyRequests />}></Route>
            <Route path="SendMessage" element={<SendMessage />}></Route>
            <Route path="Messages" element={<Messages />}></Route>
            <Route path="Settings" element={<Settings />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
          </Route>
          <Route path="/CreateSwapOffer" element={<CreateSwapOfferPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
