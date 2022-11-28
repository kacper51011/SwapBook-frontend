import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BooksForSwapPage from "./Pages/BooksForSwapPage/BooksForSwapPage";
import Account from "./ProtectedPages/Account/Account";
import MyRequests from "./ProtectedPages/Account/MyOffers";
import ProtectedPagesContainer from "./ProtectedPages/ProtectedPagesContainer";
import Footer from "./components/Footer";
import Profile from "./ProtectedPages/Account/Profile";
import CreateSwapOfferPage from "./ProtectedPages/CreateSwapOffer/CreateSwapOfferPage";
import BookDetails from "./Pages/BookDetails/BookDetails";
import SnackBarItem from "./components/SnackBarItem";
import { useAppSelector } from "./hooks/useAppSelector";
import MyOffers from "./ProtectedPages/Account/MyOffers";

// todo: images, swaps page, swaps expiration, preparing dates, refactoring

function App() {
  const successMessage = useAppSelector((state) => state.alerts.success);
  const successState = useAppSelector(
    (state) => state.alerts.successVisibility
  );
  const errorMessage = useAppSelector((state) => state.alerts.error);
  const errorState = useAppSelector((state) => state.alerts.errorVisibility);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        {/* Pages without protection */}
        <Route path="/" element={<Home />} />
        <Route path="/Books" element={<BooksForSwapPage />} />
        <Route path="/Books/:bookId" element={<BookDetails />} />
        {/*  Protected pages*/}
        <Route element={<ProtectedPagesContainer />}>
          <Route path="/Account" element={<Account />}>
            <Route path="MyOffers" element={<MyOffers />}></Route>
            <Route path="Profile" element={<Profile />}></Route>
          </Route>
          <Route path="/CreateSwapOffer" element={<CreateSwapOfferPage />} />
        </Route>
      </Routes>
      <Footer />
      <SnackBarItem
        state={successState}
        color="success"
        message={successMessage}
      />
      <SnackBarItem state={errorState} color="error" message={errorMessage} />
    </div>
  );
}

export default App;
