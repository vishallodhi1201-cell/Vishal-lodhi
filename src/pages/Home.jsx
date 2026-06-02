import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { useEffect } from "react";

import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";

export default function Home() {
  useEffect(() => {
    const starsContainer = document.getElementById("stars");

    if (!starsContainer) return;

    for (let i = 0; i < 300; i++) {
      const star = document.createElement("div");

      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 3 + "s";

      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <>
      <div id="stars" className="fixed inset-0 pointer-events-none z-0"></div>
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-start text-center px-6 pt-24 overflow-hidden gap-8">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-avatar w-72 h-72 md:w-96 md:h-96 rounded-full"
        >
          <img
            src="/images/profile.jpg"
            alt="Vishal"
            className="hero-avatar-image w-full h-full rounded-full object-cover"
          />
        </motion.div>

        {/* Hero Text */}
        <div className="relative z-10 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-name text-5xl md:text-7xl font-black tracking-tight"
          >
            VISHAL
          </motion.h1>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">My Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaHtml5 className="text-6xl text-orange-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">HTML</h3>
              <p className="text-gray-300">Semantic structure & accessibility</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaJava className="text-6xl text-red-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Java</h3>
              <p className="text-gray-300">Object-oriented programming</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaPython className="text-6xl text-yellow-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Python</h3>
              <p className="text-gray-300">Scripting, automation & data work</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaCss3Alt className="text-6xl text-blue-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">CSS</h3>
              <p className="text-gray-300">Responsive style and layout</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaReact className="text-6xl text-cyan-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">React.js</h3>
              <p className="text-gray-300">Modern frontend applications</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaJs className="text-6xl text-yellow-300 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">JavaScript</h3>
              <p className="text-gray-300">Interactive web experiences</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaNodeJs className="text-6xl text-green-400 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Node.js</h3>
              <p className="text-gray-300">Backend development</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <SiThreedotjs className="text-6xl text-white mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Three.js</h3>
              <p className="text-gray-300">3D Web Graphics</p>
            </div>

            <div className="skill-card bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,0,0,0.12)]">
              <FaGithub className="text-6xl text-gray-300 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Competitive Programming</h3>
              <p className="text-gray-300">Problem solving & algorithms</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
