import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";


import Login from "./Pages/Login";
import About from "./Pages/About";


import Register from "./Pages/Register";
import ShowOut from "./Components/ShowOut";
import Dashboard from "./Pages/Dashboard";
import BookingForm from "./Pages/BookingForm";
import MyBook from "./Pages/MyBook";
import AdminDashboard from "./Pages/AdminDashboard";
import ContactCard from "./Components/ContactCard";
import ProviderDashboard from "./Components/providerDashboard";




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowOut />}>
            <Route index element={<Home />} />
            
            
            <Route path="about" element={<About />} />
            
            
            <Route path="dashboard" element={<Dashboard/>} />
             <Route path="booking-form" element={<BookingForm />} />
            <Route path="mybookings" element={<MyBook />} />
            <Route path="contact" element={<ContactCard />} />
            <Route path="admindashboard" element={<AdminDashboard />} />
            
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="provider" element={<ProviderDashboard />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



