import { useState } from 'react'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './components/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Dummy form for Netlify detection */}
      <form name="feedback" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
    </div>
  );
}

export default App
