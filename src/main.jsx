import React from 'react'
import { Route } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/about/about.jsx'
import Contact from './components/contact/Contact.jsx'
import Feedback from './components/feedback/Feedback.jsx'
import Home from './components/home/Home.jsx';
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home/>} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="feedback" element={<Feedback />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);