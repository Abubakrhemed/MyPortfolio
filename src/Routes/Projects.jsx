import React from "react";

const Projects = () => {
  return (
    <div className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Featured Work
        </h2>

        <div className="grid grid-cols-1 max-w-xl mx-auto">
          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:-translate-y-2 hover:shadow-emerald-500/10 transition-all duration-300">
            <div className="w-full h-64 bg-slate-800 relative overflow-hidden flex items-center justify-center">
              <img
                src="/flow-poster.webp"
                alt="Flow Extension Preview"
                className="object-contain w-[90%] h-[90%] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
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
              <a
                href="https://github.com/Abubakrhemed/Flow-extension"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
