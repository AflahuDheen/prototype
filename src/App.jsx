// aDNex Landing Page - Ramotion-style React Version with Scroll Cards

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Menu, X } from 'lucide-react'; // Add Menu and X icons
import './App.css';
import styled from 'styled-components';
import logo from './assets/aDNex.png';
import bg from './assets/bg.jpg';

const languages = [
  {
    name: 'Python',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
  },
  {
    name: 'Java',
    logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
  },
  {
    name: 'C++',
    logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
  },
  {
    name: 'HTML',
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
  },
  {
    name: 'CSS',
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
  },
  {
    name: 'React',
    logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
  },
];

const scrollCardVariants = {
  initial: { scale: 0.9, opacity: 0.5 },
  whileInView: { scale: 1, opacity: 1 },
};

const AButton = ({ text }) => {
  return (
    <StyledWrapper>
      <button>
        {text}
        <div id="clip">
          <div id="leftTop" className="corner" />
          <div id="rightBottom" className="corner" />
          <div id="rightTop" className="corner" />
          <div id="leftBottom" className="corner" />
        </div>
        <span id="rightArrow" className="arrow" />
        <span id="leftArrow" className="arrow" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    position: relative;
    width: 11em;
    height: 4em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: #ddebf0;
  }

  #clip {
    --color: #2761c3;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px #195480;
    -webkit-clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: #2761c3;
    top: 35%;
    width: 11%;
    height: 30%;
  }

  #leftArrow {
    left: -13.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  #rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
  }

  button:hover #rightArrow {
    background-color: #27c39f;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  button:hover #leftArrow {
    background-color: #27c39f;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: #2761c3;
    box-shadow: inset 1px 1px 8px #2781c3;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
  }

  #rightTop {
    top: -1.98em;
    left: 91%;
  }

  #leftTop {
    top: -1.96em;
    left: -3em;
  }

  #leftBottom {
    top: 2.1em;
    left: -2.15em;
  }

  #rightBottom {
    top: 45%;
    left: 88%;
  }

  button:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
      0.2s linear 0.4s both lightEffect8;
  }

  button:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
      0.2s linear 0.4s both lightEffect8;
  }

  button:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
      0.2s linear 0.4s both lightEffect8;
  }

  button:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
      0.2s linear 0.4s both lightEffect8;
  }

  button:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  button:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
  }

  @keyframes changeColor8 {
    from {
      background-color: #2781c3;
    }

    to {
      background-color: #27c39f;
    }
  }

  @keyframes lightEffect8 {
    from {
      box-shadow: 1px 1px 5px #27c39f;
    }

    to {
      box-shadow: 0 0 2px #27c39f;
    }
  }

  @keyframes greenLight8 {
    from {
    }

    to {
      box-shadow: inset 0px 0px 32px #27c39f;
    }
  }

  @keyframes leftArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(10px);
    }
  }

  @keyframes rightArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(-10px);
    }
  }
`;

export const AnimatedButton = ({ text, href }) => {
  return (
    <StyledWrapper2>
      <button type="button" className="btn">
        <strong>{text}</strong>
        <div id="container-stars">
          <div id="stars" />
        </div>
        <div id="glow">
          <div className="circle" />
          <div className="circle" />
        </div>
      </button>
    </StyledWrapper2>
  );
};
const StyledWrapper2 = styled.div`
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13rem;
    overflow: hidden;
    height: 3rem;
    background-size: 300% 300%;
    cursor: pointer;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
    transition: 0.5s;
    animation: gradient_301 5s ease infinite;
    border: double 4px transparent;
    background-image: linear-gradient(#212121, #212121),
      linear-gradient(
        137.48deg,
        #ffdb3b 10%,
        #fe53bb 45%,
        #8f51ea 67%,
        #0044ff 87%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  #container-stars {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.5s;
    backdrop-filter: blur(1rem);
    border-radius: 5rem;
  }

  strong {
    z-index: 2;
    font-family: 'Avalors Personal Use';
    font-size: 12px;
    letter-spacing: 5px;
    color: #ffffff;
    text-shadow: 0 0 4px white;
  }

  #glow {
    position: absolute;
    display: flex;
    width: 12rem;
  }

  .circle {
    width: 100%;
    height: 30px;
    filter: blur(2rem);
    animation: pulse_3011 4s infinite;
    z-index: -1;
  }

  .circle:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  .circle:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }

  .btn:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  .btn:hover {
    transform: scale(1.1);
  }

  .btn:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  .btn:active .circle {
    background: #fe53bb;
  }

  #stars {
    position: relative;
    background: transparent;
    width: 200rem;
    height: 200rem;
  }

  #stars::after {
    content: '';
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: animStarRotate 90s linear infinite;
  }

  #stars::after {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  #stars::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: animStar 60s linear infinite;
  }

  #stars::before {
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }

  @keyframes animStar {
    from {
      transform: translateY(0);
    }

    to {
      transform: translateY(-135rem);
    }
  }

  @keyframes animStarRotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes gradient_301 {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes pulse_3011 {
    0% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }

    100% {
      transform: scale(0.75);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="flex justify-center items-center w-screen h-screen bg-gray-50 overflow-auto scroll-smooth"
      style={{
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For Internet Explorer and Edge
      }}
    >
      <style>
        {`
        /* For WebKit-based browsers (Chrome, Safari, Edge) */
        div::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>
      <main className="font-sans bg-white text-neutral-900 w-full h-full max-w-[1920px] max-h-[1080px]">
        <header
          className={`${
            isScrolled ? 'is-scrolled' : ''
          } flex justify-between items-center px-8 py-4`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo} // Replace with the path to your logo image
              alt="aDNex Logo"
              className="h-10 w-auto" // Adjust height and width as needed
            />
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger-menu md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links */}
          <nav className={`${menuOpen ? 'open' : 'closed'} md:flex`}>
            <a href="#about" className="block md:inline-block px-4 py-2 md:p-0">
              About
              <span></span>
            </a>
            <a
              href="#approach"
              className="block md:inline-block px-4 py-2 md:p-0"
            >
              Approach
              <span></span>
            </a>
            <a
              href="#curriculum"
              className="block md:inline-block px-4 py-2 md:p-0"
            >
              Curriculum
              <span></span>
            </a>
            <a
              href="#languages"
              className="block md:inline-block px-4 py-2 md:p-0"
            >
              Languages
              <span></span>
            </a>
            <a
              href="#contact"
              className="block md:inline-block px-4 py-2 md:p-0"
            >
              Contact
              <span></span>
            </a>
          </nav>
        </header>
        <section
          className="relative py-28 text-center px-6 max-w-4xl mx-auto mt-20"
          style={{
            backgroundImage: `url(${bg})`, // Use the imported bg image from assets
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '15px', // Add rounded corners
          }}
        >
          {/* Content */}
          <div className="relative z-10 p-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Empowering Collaborative Coding Education
            </motion.h1>
            <motion.p
              className="text-lg max-w-2xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-500 to-purple-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We break communication barriers to help students grow through
              group learning and mentorship.
            </motion.p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
            <AnimatedButton text="Login" href="#login" />
            <AnimatedButton text="Signup" href="#signup" />
          </div>
        </section>

        <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold mb-6 text-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            For Aspiring Developers Seeking Collaborative Growth
          </motion.h2>
          <motion.p
            className="text-gray-700 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We specialize in nurturing digital skills through peer-to-peer
            learning and mentorship.
          </motion.p>
        </section>

        <section
          id="approach"
          className="py-24 px-6 bg-gray-50 max-w-5xl mx-auto grid gap-12"
        >
          <motion.div
            className="flex flex-col md:flex-row items-center rounded-xl bg-white p-8 shadow-md"
            variants={scrollCardVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.4 }}
          >
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-neutral-800">
                Our Approach
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Hybrid online/offline sessions</li>
                <li>Groups of 5 students per mentor</li>
                <li>Peer-to-peer doubt clearing</li>
                <li>Mentor guidance at critical points</li>
                <li>Real-world project-based learning</li>
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7660.jpg?t=st=1745239089~exp=1745242689~hmac=f9c0178cde3c5175b5fd8c809fa6926ef1d3181c019980047c8c98ded1b1bb13&w=1380"
                alt="Our Approach"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </section>

        <section
          id="curriculum"
          className="py-24 px-6 max-w-5xl mx-auto grid gap-12"
        >
          <motion.div
            className="flex flex-col md:flex-row items-center rounded-xl bg-white p-8 shadow-md"
            variants={scrollCardVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.4 }}
          >
            {/* Text Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold mb-4 text-neutral-800">
                What You'll Learn
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                <li>Programming Languages: Python, JavaScript, Java, C++</li>
                <li>Web Development: HTML, CSS, React, Node.js</li>
                <li>Mobile Development: Flutter, React Native</li>
                <li>Data Structures & Algorithms</li>
                <li>Version Control with Git & GitHub</li>
              </ul>
            </div>

            {/* Image */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1745238972~exp=1745242572~hmac=9d75acc6bfab8da8ba0717047467575f3c824de3b56e01e14d98e72ffd1fcb86&w=1060"
                alt="What You'll Learn"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </section>

        <section
          id="languages"
          className="py-24 px-6 bg-white max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-semibold mb-10 text-center text-neutral-800">
            Languages to Study
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 items-center justify-center">
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center space-y-3 p-4 rounded-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={lang.logo}
                  alt={lang.name}
                  className="w-16 h-16 object-contain"
                />
                <span className="font-medium text-gray-800 text-sm">
                  {lang.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-neutral-800">
            Success Stories
          </h2>
          <p className="text-gray-700 italic mb-4">
            “aDNex transformed my learning experience. Collaborating with peers
            made complex concepts easier to grasp.”
          </p>
          <p className="text-gray-700 italic">
            “The mentorship at aDNex provided the guidance I needed to pursue a
            career in software development.”
          </p>
        </section>

        <section
          id="join"
          className="py-24 px-6 bg-neutral-900 text-white text-center"
        >
          <h2 className="text-3xl font-semibold mb-4">Ready to Join aDNex?</h2>
          <p className="mb-6">Start your collaborative coding journey now.</p>
          <a href="#contact">
            <AButton text="Start" />
          </a>
        </section>

        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-neutral-800">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            Have questions? Reach out to us via email or phone.
          </p>
          <div className="flex flex-col md:flex-row gap-6 text-gray-800">
            <div className="flex items-center space-x-3">
              <Mail className="text-blue-500" />
              <span>contact@adnex.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-blue-500" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </section>

        <footer className="py-6 text-center text-gray-500 text-sm bg-gray-100">
          © 2025 aDNex. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
