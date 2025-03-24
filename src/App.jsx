import React from "react";
import "./App.css";
import Layout from "./Layout"; // You forgot to import Layout in App.jsx

function App() {
  return (
    <div>
      {/* Dummy form for Netlify detection */}
      <form name="feedback" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>

      {/* Main Layout with your actual app */}
      <Layout />
    </div>
  );
}

export default App;
