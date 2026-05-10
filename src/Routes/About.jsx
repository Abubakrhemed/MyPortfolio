import React from "react";

const About = () => {
  return (
    <div className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I am a Full-Stack Developer and recent Computer Engineering
                Technology graduate from Humber Polytechnic, continuing my
                education in Software Engineering Technology at McMaster
                University this September. Based in the Greater Toronto Area, I
                specialize in bridging the gap between complex technical
                problems and seamless user experiences.
              </p>
              <p>
                My expertise spans across the entire stack. On the frontend, I
                build dynamic, responsive interfaces using React and Tailwind
                CSS. On the backend, I engineer robust APIs and scalable
                architecture utilizing Node.js, C#, and ASP.NET Core.
              </p>
              <p>
                Whether I am developing comprehensive SaaS templates for local
                enterprises or creating highly optimized development tools, I
                approach every project with a strong engineering foundation and
                a consultant's mindset.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Technical Arsenal
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-blue-400 font-medium mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    React
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    TypeScript
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    JavaScript
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Tailwind CSS
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    HTML / CSS
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-emerald-400 font-medium mb-3">
                  Backend & Database
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Node.js
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Express.js
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    C#
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    REST APIs
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    PostgreSQL
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    MongoDB
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-purple-400 font-medium mb-3">
                  Tools & Architecture
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Git / GitHub
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Docker
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Postman
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Vercel
                  </span>
                  <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded-md text-sm border border-slate-700">
                    Automated Testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
