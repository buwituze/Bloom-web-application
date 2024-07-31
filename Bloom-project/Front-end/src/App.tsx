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
import ExpertAdvice from "./components/Expert";
import MarketPrices from "./components/MarketPrices";
import Weather from "./components/Weather";
import Community from "./components/Community";
import Market from "./components/Market";
import SuppComm from "./components/SuppCommunity";
import CommunityPage from "./components/CommunityPage";
import FarmerHome from "./components/farmerhome";
import Farmer from "./components/farmer";
import Event from "./components/events";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard-content" element={<DashboardContent />} />
        <Route path="/market-prices" element={<MarketPrices />} />
        <Route path="/weather-forecast" element={<Weather />} />
        <Route path="/marketplace" element={<Market />} />
        <Route path="/expert" element={<ExpertAdvice />} />
        <Route path="/community-forum" element={<Community />} />
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
        <Route path="/SuppCommunity" element={<SuppComm />} />
        <Route path="/CommunityPage" element={<CommunityPage />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/farmerhome" element={<FarmerHome />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
