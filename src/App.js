import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />

      <Routes> 
          <Route path="/" element={<Home/>}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
