import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
function Layout() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-linear-to-t from-purple-950 to-black">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout
