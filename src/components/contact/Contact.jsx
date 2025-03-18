import React from 'react'

function Contact() {
  return (
    <div className=" ml-15 gap-10 mb-15 mt-30 flex w-full place-items-center px-10">
      <div className="group p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:border-2 border-gray-500 text-transparent  hover:text-white">
        <h1 className="flex justify-center items-center text-white text-3xl font-sans font-bold underline decoration-green-500 underline-offset-4 hover:text-green-400 transition-colors duration-300 cursor-pointer">
          GitHub
        </h1>

        <a
          href="https://github.com/diyashah26"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-64 h-64"
        >
          <img
            src="/github.png"
            alt="Diya Shah"
            className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110 "
          />
        </a>
        <p className="w-64">
          <span className="font-bold underline">
            Click on the icon to visit my Github Profile
          </span>
          <br /> I've developed various projects including{" "}
          <span className="italic">Password generator</span> that generates
          strong password that cannot be hacked by hackers,{" "}
          <span className="italic">Currency Coventer</span> that helps in
          converting real time money exchange and a group project named as{" "}
          <span className="italic">ConvoConstitution</span> which helps
          youngsters in understanding Constitution of India in a simpler manner.
        </p>
      </div>
      {/* Gmail */}
      <div className="group p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:border-2 border-gray-500 text-transparent  hover:text-white">
        <h1 className="flex justify-center items-center text-white text-3xl font-sans font-bold underline decoration-red-500 underline-offset-4 hover:text-red-400 transition-colors duration-300 cursor-pointer">
          Gmail
        </h1>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=diyashah2628@gmail.com&su=Hello%20Diya&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-64 h-64"
        >
          <img
            src="/gmail.png"
            alt="Diya Shah"
            className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>
        <p className="w-64 h-78">
          <span className="font-bold underline">
            Click on the icon to send me a mail
          </span>
          <br /> I'm actively looking for internship/job roles, so if you have
          an opportunity to offer me then please reach out at email :
          diyashah2628@gmail.com .
        </p>
      </div>

      {/* LinkedIn */}
      <div className="group p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:border-2 border-gray-500 text-transparent  hover:text-white">
        <h1 className="flex justify-center items-center text-white text-3xl font-sans font-bold underline decoration-blue-500 underline-offset-4 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
          LinkedIn
        </h1>

        <a
          href="https://www.linkedin.com/in/diya-shah-853692213/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-64 h-64"
        >
          <img
            src="/linkedIn.png"
            alt="Diya Shah"
            className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>
        <p className="w-64 h-78">
          <span className="font-bold underline">
            Click on the icon to visit my Linked Profile
          </span>
          <br /> I actively post on LinkedIn with about each and every career
          update or personal goal achieved. You can check my LinkedIn profile to
          have a view at my learning journey in Web Development and personal
          growth.
        </p>
      </div>

      {/* GitHub */}

      {/* HackerRank */}
      <div className="group p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:border-2 border-gray-500 text-transparent  hover:text-white">
        <h1 className="flex justify-center items-center text-white text-3xl font-sans font-bold underline decoration-emerald-500 underline-offset-4 hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
          HackerRank
        </h1>

        <a
          href="https://www.hackerrank.com/profile/diyashah2628"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-64 h-64"
        >
          <img
            src="/hackerrank.webp"
            alt="Diya Shah"
            className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </a>
        <p className="w-64 h-78">
          <span className="font-bold underline">
            Click on the icon to visit my HackerRank Profile
          </span>
          <br /> I've solved various problems on HackerRank in C++ and Java. I
          use this platform to practice DSA and Programming questions.
        </p>
      </div>
    </div>
  );
}

export default Contact
