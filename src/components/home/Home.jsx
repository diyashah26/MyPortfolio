import React , {useState , useEffect } from 'react'

function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
    
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h1 className="typing-text text-2xl sm:text-6xl md:text-7xl lg:text-7xl font-sans font-extralight text-white">
        WELCOME TO MY PORTFOLIO!
      </h1>

      <div
        className={`flex flex-col md:flex-row items-center border-0 md:border-2 m-4 md:m-17 rounded-lg border-gray-600 gap-6 md:gap-12 transition-opacity duration-1000 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Image */}
        <img
          src="/diya.jpeg"
          alt="diyaPhoto"
          className={`
      w-40 sm:w-52 md:w-64 h-auto rounded-lg border-white border-2 shadow-2xl shadow-black transition-opacity duration-1000 ease-in-out px-1.5 py-2
    `}
        />

        {/* Text */}
        <p className="font-sans font-extralight text-lg sm:text-xl md:text-3xl text-white block text-justify mx-6 md:mr-5">
          
          Hi! I’m{" "}
          <span className="font-semibold text-indigo-400">Diya Shah</span>, a Computer Science graduate focused on AI Automation, Software Engineering and Web Development. I have hands-on experience building AI-powered workflows, integrating APIs and automating real-world processes using tools such as Make.com, n8n, Python and REST APIs. Alongside automation, I have experience developing backend systems with FastAPI and Flask and building responsive web applications with React.js. I enjoy combining software development with AI and automation to create practical, efficient and scalable solutions.

        </p>
      </div>
      <a
        href="https://drive.google.com/file/d/17glLMCn7vi1LicEo2yOTlGNq84mVFJMD/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-green-500 p-2 rounded-lg font-sans font-semibold mb-8 w-50 l-50 text-white text-center ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        Download Resume
      </a>
    </div>
  );
}

export default Home