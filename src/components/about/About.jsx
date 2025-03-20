import React, { useRef, useEffect, useState } from "react";

function About() {
  const [visibleItems, setVisibleItems] = useState([]);

  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      {/* circle + div RIGHT */}
      <div
        ref={addToRefs}
        data-index="0"
        className="flex items-center justify-center relative mb-4 mt-10 w-full"
      >
        {/* Content RIGHT */}
        <div
          className={`absolute left-1/2 ml-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(0)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="bg-white rounded shadow text-black text-sm sm:p-1 sm:text-base sm:w-40 md:p-3 md:text-lg md:w-70 ">
            Let's explore my learning journey!
          </div>
        </div>
        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>

      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div LEFT */}
      <div
        ref={addToRefs}
        data-index="1"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute left-1/2 ml-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(1)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="text-8xl px-4 py-2 w-200 rounded text-left text-[rgba(66,114,66,0.5)] font-semibold hidden md:flex flex-col items-end">
            HTML & CSS
          </div>
        </div>

        {/* Content LEFT */}
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(1)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 w-60 rounded text-left ">
            I started my journey with learning{" "}
            <span className="font-bold">HTML and CSS</span>. I've learned it
            from the following Courses -{" "}
            <ol>
              <li>
                OpenClassroom's{" "}
                <a
                  href="https://drive.google.com/file/d/1awQz6NHDNSyeVmdAKEEDcEjhEqXmQoCI/view?usp=sharing"
                  className="italic font-bold  underline"
                >
                  "Build Your First Web Pages With HTML and CSS"
                </a>{" "}
                Course,
              </li>
              <li>
                Great Learning's{" "}
                <a
                  href="https://drive.google.com/file/d/1puJPhQd612O1JEQbLDL0w39V_Vn1xadg/view?usp=sharing"
                  className="italic  font-bold underline"
                >
                  Frontend Development - HTML
                </a>{" "}
                Course
              </li>
              <li>
                and Infosys Springboard's{" "}
                <a
                  href="https://drive.google.com/file/d/1jKWyTvskbuelDaWMBUGLxq7L4_zBacp-/view?usp=sharing"
                  className="italic font-bold underline"
                >
                  HTML-5
                </a>{" "}
                Course
              </li>
            </ol>
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>

      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div RIGHT */}
      <div
        ref={addToRefs}
        data-index="2"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="text-[rgba(219,131,87,0.5)] px-4 py-2 rounded shadow w-150 text-right text-8xl ml-10 hidden md:flex flex-col items-end">
            JS & MERN
          </div>
        </div>

        {/* Content RIGHT */}
        <div
          className={`absolute left-1/2 ml-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60">
            I deep dive into <span className="font-bold">JavaScript</span> with{" "}
            <span className="italic">open-source</span> and Ongoing Udemy's{" "}
            <a
              href="https://drive.google.com/file/d/1rY3nCnPwUQiHpgwyIg6bZAeexbeFdEW_/view?usp=sharing"
              className="italic underline font-bold"
            >
              "Complete web development course by Hitesh Choudhary"
            </a>{" "}
            {", "} from which i also learned{" "}
            <span className="font-bold">
              ReactJS, MongoDB, NodeJS, ExpressJS, MySQL, TailwindCSS and
              Bootstrap
            </span>
            . Other than that, I've attended a workshop in IIT Indore for{" "}
            <a
              href="https://drive.google.com/file/d/1Z1P6SF2mIFV-_YgXMW5D_cPnevzddir4/view?usp=sharing"
              className="italic font-bold underline"
            >
              Website Development{" "}
            </a>{" "}
            with hands-on practice on HTML, CSS and JavaScript.
          </div>
        </div>
        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>

      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div LEFT */}
      <div
        ref={addToRefs}
        data-index="3"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute left-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="text-[rgba(118,118,231,0.5)] px-4 py-2 rounded shadow w-60 text-right text-8xl ml-10 hidden md:flex flex-col items-end">
            C++
          </div>
        </div>

        {/* Content LEFT */}
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60 text-right">
            I've learned <span className="font-bold">C++</span> from Open Source
            and Infosys Springboard's{" "}
            <a
              href="https://drive.google.com/file/d/1JfuDH3wV83HlVj2Goxf4FWr8twB11upT/view?usp=sharing"
              className="italic underline font-bold"
            >
              Programming with C++
            </a>{" "}
            Course. I've also attended a hands-on{" "}
            <a
              href="https://drive.google.com/file/d/1HOhgVoZaKK6p6eFIfnSaMhEK2F82nR9H/view?usp=sharing"
              className="italic underline font-bold"
            >
              workshop on C and C++
            </a>{" "}
            by Ypsilon Company.
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>

      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div RIGHT */}
      <div
        ref={addToRefs}
        data-index="4"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(4)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="text-[rgba(225,57,57,0.71)] px-4 py-2 rounded shadow w-60 text-right text-8xl ml-10 hidden md:flex flex-col items-end">
            Java
          </div>
        </div>

        {/* Content RIGHT */}
        <div
          className={`absolute left-1/2 ml-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(4)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60">
            I've earned certificate in <span className="font-bold">Java</span>{" "}
            from Infosys Springboard's{" "}
            <a
              href="https://drive.google.com/file/d/1WVFrkX03VTwcXRcPD8SgA356U0SNE9BG/view?usp=sharing"
              className="italic font-bold underline"
            >
              Programming in Java
            </a>{" "}
            Course as well as i've completed{" "}
            <span className="font-bold">DSA in Java</span> with Infosys
            Springboard's{" "}
            <a
              href="https://drive.google.com/file/d/15L28ZVZwrXoqV7bE-aa6Pbgupp8RWGID/view?usp=sharing"
              className="italic font-bold underline"
            >
              Data Structures and Algorithm
            </a>{" "}
            Course.
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>
      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div LEFT */}
      <div
        ref={addToRefs}
        data-index="5"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute left-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(5)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="text-[rgba(75,183,255,0.5)] px-4 py-2 rounded shadow w-60 text-right text-8xl ml-10 hidden md:flex flex-col items-end">
            Python
          </div>
        </div>

        {/* Content LEFT */}
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(5)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60 text-right">
            I've learned <span className="font-bold">python</span> with Infosys
            Springboard's{" "}
            <a
              href="https://drive.google.com/file/d/1XekYumySg9rNA6VJc2_ofimhFQBZ6_BK/view?usp=sharing"
              className="italic underline font-bold"
            >
              basics of python
            </a>{" "}
            course as well as{" "}
            <span className="font-bold">basics of cybersecurity</span> using
            Infosys Springboard's{" "}
            <a
              href="https://drive.google.com/file/d/1Vhf_k6zQcyk1HmBMZ5a9KRRvHYWYL7DW/view?usp=sharing"
              className="italic font-bold underline"
            >
              Predictive Analytics: Case Studies for Cybersecurity
            </a>{" "}
            Course
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>
      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div RIGHT */}
      <div
        ref={addToRefs}
        data-index="6"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(6)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="text-[rgba(118,231,133,0.5)] px-4 py-2 rounded shadow w-120 text-right text-8xl ml-10 hidden md:flex flex-col items-end">
            Hackathon
          </div>
        </div>

        {/* Content RIGHT */}
        <div
          className={`absolute left-1/2 ml-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(6)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60">
            In Co-curricular Activities, I've won third position in{" "}
            <a
              href="https://drive.google.com/file/d/10Vo1Rw4G1qnND-jBVMHss3bscS9uPngQ/view?usp=sharing"
              className="italic font-bold underline"
            >
              DECATHON
            </a>{" "}
            which is an intra-college hackathon, Attended{" "}
            <a
              href="https://drive.google.com/file/d/1Cwz9aD1RxvQ_Dgr9h-M3eb-yTlFV01BZ/view?usp=sharing"
              className="italic underline font-bold"
            >
              Mobile Development using Flutter and Firebase
            </a>{" "}
            workshop and{" "}
            <a
              href="https://drive.google.com/file/d/1Hu6Br_WfKy7mCh5Dth6Ynj2XiAU7Gm3O/view?usp=sharing"
              className="italic font-bold underline"
            >
              Vision Craft AI
            </a>{" "}
            workshop.
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>
      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div LEFT */}
      <div
        ref={addToRefs}
        data-index="7"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        <div
          className={`absolute left-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(7)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="text-[rgba(118,118,231,0.5)] px-4 py-2 rounded shadow w-100 text-right text-8xl ml-10 hidden md:flex flex-col items-end">
            Udemy
          </div>
        </div>

        {/* Content LEFT */}
        <div
          className={`absolute right-1/2 mr-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(7)
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60 text-right">
            I'm currently completing my{" "}
            <a
              href="https://drive.google.com/file/d/1rY3nCnPwUQiHpgwyIg6bZAeexbeFdEW_/view?usp=sharing"
              className="italic font-bold underline"
            >
              Udemy's complete web development course by hitesh Choudhary
            </a>{" "}
            and working on projects in order to enhance my skills.
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full"></div>
      </div>
      {/* line */}
      <div className="flex items-center justify-center mb-4">
        <div className="border-l-2 border-4 border-4xl border-gray-400 h-100"></div>
      </div>

      {/* circle + div RIGHT */}
      <div
        ref={addToRefs}
        data-index="8"
        className="flex items-center justify-center relative mb-4 w-full"
      >
        {/* Content RIGHT */}
        <div
          className={`absolute left-1/2 ml-10 transition-all duration-700 ease-out
            ${
              visibleItems.includes(8)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }
          `}
        >
          <div className="bg-white text-black px-4 py-2 rounded shadow w-60">
            That's All By My Side, Thank You for reaching upto here!
          </div>
        </div>

        <div className="border-8 border-2xl border-yellow-200 rounded-full mb-20"></div>
      </div>
    </div>
  );
}

export default About;
