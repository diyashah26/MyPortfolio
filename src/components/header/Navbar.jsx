import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setSidebarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="w-full mx-auto px-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 text-gray-400   mt-2">
            {/* Horizontal Nav Links (visible when not scrolled) */}
            {!scrolled && (
              <ul className="flex text-white space-x-3 ml-6 md:space-x-70 md:ml-25">
                <li>
                  <a
                    href="#home"
                    className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg font-medium hover:text-purple-400 transition-all duration-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg font-medium hover:text-purple-400 transition-all duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg font-medium hover:text-purple-400 transition-all duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#feedback"
                    className="px-2 py-1 text-base md:px-4 md:py-2 md:text-lg font-medium hover:text-purple-400 transition-all duration-300"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            )}

            {/* Hamburger Icon (visible when scrolled) */}
            {scrolled && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-white bg-amber-50/20 p-1 rounded-lg mr-40 transition-opacity duration-500 hover:text-purple-400"
              >
                {sidebarOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Sidebar (shows when hamburger menu is open) */}
      <div
        className={`fixed top-0 left-0  h-full w-64 bg-purple-900 text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40 shadow-2xl`}
      >
        {/* Sidebar Links */}
        <div className="mt-10 ml-2 flex flex-col p-6 space-y-8">
          <a
            href="#home"
            onClick={() => setSidebarOpen(false)}
            className="text-lg font-medium hover:text-purple-400 transition-all duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setSidebarOpen(false)}
            className="text-lg font-medium hover:text-purple-400 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setSidebarOpen(false)}
            className="text-lg font-medium hover:text-purple-400 transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="#feedback"
            onClick={() => setSidebarOpen(false)}
            className="text-lg font-medium hover:text-purple-400 transition-all duration-300"
          >
            Feedback
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
