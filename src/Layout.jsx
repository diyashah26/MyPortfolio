import React from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Feedback from "./components/feedback/Feedback";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-purple-950 to-black scroll-smooth overflow-x-hidden bg-fixed bg-cover">
      

      <Navbar />
      <main className="flex-1">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <Home />
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center "
        >
          <About />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <Contact />
        </section>

        <section
          id="feedback"
          className="min-h-screen flex items-center justify-center"
        >
          <Feedback />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
