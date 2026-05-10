import React from "react";

const Projects = () => {
  return (
    <div className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:-translate-y-2 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="w-full h-64 bg-slate-800 relative overflow-hidden flex items-center justify-center">
              <video
                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                controls
                poster="/flow-thumbnail.png"
              >
                <source src="/flow-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Lezzet Shawarma (Restaurant SaaS)
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed min-h-[100px]">
                A high-performance modern web application built for a local
                restaurant, engineered as the foundation for a scalable
                Restaurant SaaS template. Features an admin portal for live menu
                updates, WebP image optimization, and Serverless deployment.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                  React
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                  Vite
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                  Tailwind CSS
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                  Vercel
                </span>
              </div>
              <a
                href="https://lezzete.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                Live Project
              </a>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:-translate-y-2 hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="w-full h-64 bg-slate-800 relative overflow-hidden flex items-center justify-center">
              <video
                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                controls
                poster="/flow-thumbnail.png"
              >
                <source src="/flow-demo.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                Flow - Productivity Chrome Extension
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed min-h-[100px]">
                A full-stack browser extension designed to boost developer
                productivity by persisting and tracking browser tab usage. The
                backend architecture was explicitly optimized to utilize local
                storage for seamless React frontend testing without
                extension-only API conflicts.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                  React
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                  Node.js
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                  MongoDB
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                  Chrome APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
