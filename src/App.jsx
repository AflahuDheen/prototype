// aDNex Landing Page - Ramotion-style React Version with Scroll Cards

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Menu, X } from 'lucide-react'; // Add Menu and X icons
import './App.css';

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

const AnimatedButton = ({ text }) => {
  return (
    <a href="#" className="button type--C">
      <div className="button__line"></div>
      <div className="button__line"></div>
      <span className="button__text">{text}</span>
      <div className="button__drow1"></div>
      <div className="button__drow2"></div>
    </a>
  );
};

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
    <div className="flex justify-center items-center w-screen h-screen bg-gray-50 overflow-auto scroll-smooth">
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
          className={`flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
            isScrolled ? 'scale-105 shadow-lg' : 'scale-100'
          }`}
          style={{
            transformOrigin: 'top center',
          }}
        >
          <div
            className="text-xl font-semibold text-neutral-800"
            style={{ fontFamily: "'Old English Text MT', serif" }}
          >
            aDNex
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Navigation Links */}
          <nav
            className={`${
              menuOpen
                ? 'translate-y-0 opacity-100'
                : '-translate-y-full opacity-0'
            } md:flex md:space-x-6 text-sm absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out`}
          >
            <a
              href="#about"
              className="block md:inline-block text-black hover:text-blue-600 transition-transform transform hover:scale-105 relative group px-4 py-2 md:p-0"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#approach"
              className="block md:inline-block text-black hover:text-blue-600 transition-transform transform hover:scale-105 relative group px-4 py-2 md:p-0"
            >
              Approach
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#curriculum"
              className="block md:inline-block text-black hover:text-blue-600 transition-transform transform hover:scale-105 relative group px-4 py-2 md:p-0"
            >
              Curriculum
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#languages"
              className="block md:inline-block text-black hover:text-blue-600 transition-transform transform hover:scale-105 relative group px-4 py-2 md:p-0"
            >
              Languages
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="block md:inline-block text-black hover:text-blue-600 transition-transform transform hover:scale-105 relative group px-4 py-2 md:p-0"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
            <AnimatedButton text="Login" />
            <AnimatedButton text="Signup" />
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
            <Button className="bg-white text-neutral-900 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold">
              Get Started
            </Button>
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
