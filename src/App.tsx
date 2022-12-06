import "./App.css";
import { lazy, Suspense } from "react";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BooksForSwapPage from "./Pages/BooksForSwapPage/BooksForSwapPage";
import Footer from "./components/Footer";
import SnackBarItem from "./components/SnackBarItem";
import { useAppSelector } from "./hooks/useAppSelector";
import { Typography } from "@mui/material";

// lazy loading implementation for protected routes
const MyOffers = lazy(() => import("./ProtectedPages/Account/MyOffers"));
const Account = lazy(() => import("./ProtectedPages/Account/Account"));
const ProtectedPagesContainer = lazy(
  () => import("./ProtectedPages/ProtectedPagesContainer")
);
const Profile = lazy(() => import("./ProtectedPages/Account/Profile"));
const CreateSwapOfferPage = lazy(
  () => import("./ProtectedPages/CreateSwapOffer/CreateSwapOfferPage")
);
const BookDetails = lazy(() => import("./Pages/BookDetails/BookDetails"));
// todo:  swaps expiration, preparing dates, refactoring

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
      <Suspense
        fallback={<Typography textAlign="center">Loading...</Typography>}
      >
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
      </Suspense>
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
