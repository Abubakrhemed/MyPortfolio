import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiExpress } from "react-icons/si";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 tracking-tight">
          Abubakr Hemed
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-200 mb-6">
          Full-Stack Developer
        </h2>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
          Building scalable SaaS products, empowering local businesses, and
          crafting high-performance web experiences.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 opacity-80">
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-full">
            <FaReact className="text-blue-400" /> React
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-full">
            <SiTailwindcss className="text-teal-400" /> Tailwind
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-full">
            <FaNodeJs className="text-green-500" /> Node.js
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-full">
            <SiExpress className="text-white" /> Express.js
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-full">
            <SiVercel className="text-white" /> Vercel
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-slate-800 px-4 py-2 rounded-full">
            {/* Updated from FaGithub to FaGitAlt and changed the color to match Git's brand */}
            <FaGitAlt className="text-orange-500" /> Git
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-medium py-3 px-8 rounded-lg transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
