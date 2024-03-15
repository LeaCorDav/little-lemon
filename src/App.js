import './App.css';
import { Routes, Route } from "react-router-dom"
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import ConfirmedBooking from './components/bookingComponents/ConfirmedBooking';

function App() {
  return (
    <>
      <Header />

      <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
