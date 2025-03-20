import React, { useState } from "react";

function Contact() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

  const cards = [
    {
      title: "GitHub",
      link: "https://github.com/diyashah26",
      img: "/github.png",
      color: "green",
      description: `I've developed various projects including Password Generator that generates
          strong password that cannot be hacked by hackers,
          Currency Coventer that helps in
          converting real time money exchange and a group project named as ConvoConstitution which helps
          youngsters in understanding Constitution of India in a simpler manner.`,
      short: "Click on the icon to visit my Github Profile",
    },
    {
      title: "Gmail",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=diyashah2628@gmail.com&su=Hello%20Diya&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20connect!",
      img: "/gmail.png",
      color: "red",
      description: `I'm actively looking for internship/job roles, so if you have
          an opportunity to offer me then please reach out at email :
          diyashah2628@gmail.com.`,
      short: "Click on the icon to send me a mail",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/diya-shah-853692213/",
      img: "/linkedIn.png",
      color: "blue",
      description: ` I actively post on LinkedIn with about each and every career
          update or personal goal achieved. You can check my LinkedIn profile to
          have a view at my learning journey in Web Development and personal
          growth.`,
      short: "Click on the icon to visit my LinkedIn Profile",
    },
    {
      title: "HackerRank",
      link: "https://www.hackerrank.com/profile/diyashah2628",
      img: "/hackerrank.webp",
      color: "emerald",
      description: `I've solved various problems on HackerRank in C++ and Java. I
          use this platform to practice DSA and Programming questions.`,
      short: "Click on the icon to visit my HackerRank Profile",
    },
  ];

  return (
    <div
      className="flex flex-wrap justify-center items-center gap-10 mb-15 mt-30 w-full px-10 
      md:flex md:gap-10 md:ml-15 md:flex-row"
    >
      {/* Mobile Layout */}
      <div className="grid grid-cols-2 gap-6 md:hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group p-4 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:border-2 border-gray-500 text-transparent hover:text-white relative"
            onClick={() => handleCardClick(index)}
          >
            <h1
              className={`flex justify-center items-center text-white text-xl font-bold underline decoration-${card.color}-500 underline-offset-4 hover:text-${card.color}-400 transition-colors duration-300`}
            >
              {card.title}
            </h1>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-full h-32"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>

            {/* Removed description in mobile */}
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl transition-transform duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm cursor-pointer hover:border-2 border-gray-500 text-transparent hover:text-white"
          >
            <h1
              className={`flex justify-center items-center text-white text-3xl font-sans font-bold underline decoration-${card.color}-500 underline-offset-4 hover:text-${card.color}-400 transition-colors duration-300`}
            >
              {card.title}
            </h1>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-64 h-64"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-32 h-32 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </a>
            <p className="w-64 mt-2">
              <span className="font-bold underline">{card.short}</span>
              <br />
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
