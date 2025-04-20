// aDNex Landing Page - Ramotion-style React Version with Scroll Cards

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Menu, X } from 'lucide-react'; // Add Menu and X icons
import './App.css';
import styled from 'styled-components';

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

export const AnimatedButton = ({ text }) => {
  return (
    <StyledWrapper2>
      <button className="button">{text}</button>
    </StyledWrapper2>
  );
};

const StyledWrapper2 = styled.div`
  .button {
    padding: 1em 2em;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    color: rgb(0, 0, 0);
    transition: all 1000ms;
    font-size: 15px;
    position: relative;
    overflow: hidden;
    outline: 2px solid #000000;
  }

  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solidrgb(0, 0, 0);
    box-shadow: 4px 5px 17px -4px #268391;
  }

  button::before {
    content: '';
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: rgb(0, 0, 0);
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
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
          <div
            className="text-xl font-semibold text-neutral-800"
            style={{ fontFamily: "'Old English Text MT', serif" }}
          >
            aDNex
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
        <section className="relative py-28 text-center px-6 max-w-4xl mx-auto mt-20">
          {/* Content */}
          <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Empowering Collaborative Coding Education
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We break communication barriers to help students grow through
              group learning and mentorship.
            </motion.p>
          </div>

          {/* Add Login and Signup buttons here */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mt-6">
            <AnimatedButton text="Login" href="#" />
            <AnimatedButton text="Signup" href="#" />
          </div>

          {/* Background Video */}
          <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://cdn.ramotion.com/1715091338-30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
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
            className="rounded-xl bg-white p-8 shadow-md"
            variants={scrollCardVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.4 }}
          >
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
          </motion.div>
        </section>

        <section
          id="curriculum"
          className="py-24 px-6 max-w-5xl mx-auto grid gap-12"
        >
          <motion.div
            className="rounded-xl bg-white p-8 shadow-md"
            variants={scrollCardVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.4 }}
          >
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
