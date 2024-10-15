import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";
import Services from "./components/Services";
import ServiceCards from "./components/ServiceCards";
import BookAnAppointment from "./components/BookAnAppointment";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
    <CustomCursor></CustomCursor>

      <Navbar />
      <div className="bg-[#F2F7FF]">
        <Hero />
        <ListItems />
      </div>

      <About />

      <div className="bg-[#F2F7FF]">
        <Services />
        <ServiceCards />
      </div>

      <BookAnAppointment />
      <VideoSection />
      <Footer></Footer>
    </>
  );
}

export default App;
