import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/login";
import Navbar from "./components/Navbar";
import Signup from "./components/signup";
import AllProducts from "./components/allproducts";
import BookingProducts from "./components/bookingpdts";
import Fertilizers from "./components/fertilizers";
import Seeds from "./components/seeds";
import Pesticides from "./components/pesticides";
import FarmingTools from "./components/farmingtools";
import IrrigationTools from "./components/irrigationtools";
import TestKits from "./components/testkits";
import FarmProduce from "./components/farmproduce";
import Resources from "./components/resources";
import News from "./components/news";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Admin from "./components/Admin";
import DashboardContent from "./components/DashboardContent";
import Expert from "./components/Expert";
import MarketPrices from "./components/MarketPrices";
import Weather from "./components/Weather";
import Community from "./components/Community";
import Market from "./components/Market";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard-content" element={<DashboardContent />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/weather-forecast" element={<Weather />} />
        <Route path="/marketplace" element={<Market />} />
        <Route path="/expert-advice" element={<Expert />} />
        <Route path="/community-forum" element={<Community />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/bookingpdts" element={<BookingProducts />} />
        <Route path="/fertilizers" element={<Fertilizers />} />
        <Route path="/seeds" element={<Seeds />} />
        <Route path="/pesticides" element={<Pesticides />} />
        <Route path="/farmingtools" element={<FarmingTools />} />
        <Route path="/irrigationtools" element={<IrrigationTools />} />
        <Route path="/testkits" element={<TestKits />} />
        <Route path="/farmproduce" element={<FarmProduce />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/DashboardContent" element={<DashboardContent />} />
        <Route path="/MarketPrices" element={<MarketPrices />} />
      </Routes>
    </Router>
  );
}

export default App;
