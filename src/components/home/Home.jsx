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
      <h1 className="typing-text text-8xl md:text-7xl font-sans font-extralight text-white ">
        WELCOME TO MY PORTFOLIO!
      </h1>
      <div
        className={`flex flex-row] items-center border-2 m-17 rounded-lg border-gray-600 gap-12 transition-opacity duration-1000 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Image */}
        <img
          src="/diya.jpeg"
          alt="diyaPhoto"
          className={`
            w-64 h-auto rounded-lg border-white border-2 shadow-2xl shadow-black transition-opacity duration-1000 ease-in-out px-1.5 py-2
           `}
        />

        {/* Text */}
        <p className="font-sans font-extralight text-3xl text-white block text-justify mr-5">
          Hi! I’m{" "}
          <span className="font-semibold text-indigo-400">Diya Shah</span>, a
          passionate Frontend Developer based in Indore. Currently in my 6th
          semester of B.Tech at Prestige Institute of Engineering Management and
          Research (PIEMR), I specialize in building responsive, user-friendly
          web applications with React.js and Tailwind CSS. I have a keen
          interest in Full-Stack Development, and I’m currently exploring
          Node.js, Express.js, and MongoDB to strengthen my backend skills. When
          I’m not coding, I enjoy learning about new technologies and
          continuously improving my skills.
        </p>
      </div>
      <a
        href="https://drive.google.com/uc?export=download&id=1x4vGKoczWOIV5WILhGSwrHSLM_38KVL0"
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