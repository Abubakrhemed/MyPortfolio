import React from "react";

const Experience = () => {
  return (
    <div className="py-24 bg-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Professional Experience
        </h2>

        <div className="bg-slate-800 rounded-2xl p-8 md:p-10 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Frontend Developer
              </h3>
              <h4 className="text-lg text-blue-400 font-medium">
                Beyond Rehab Coaching via Riipen
              </h4>
            </div>
            <div className="mt-2 md:mt-0 bg-slate-700 text-slate-200 px-4 py-1.5 rounded-full text-sm font-semibold">
              Feb 2026 – May 2026
            </div>
          </div>

          <ul className="space-y-3 text-slate-300 mb-10 list-disc list-inside marker:text-blue-500">
            <li>
              Delivered a multi-page, client-facing digital platform based on
              provided requirements, wireframes, and deadlines.
            </li>
            <li>
              Built responsive page layouts, navigation flows, and reusable UI
              components across the entire web application.
            </li>
            <li>
              Implemented on-page SEO metadata, structured data, accessibility
              text, and semantic content organization.
            </li>
            <li>
              Translated client feedback into iterative UI/UX improvements,
              ensuring design consistency across the platform.
            </li>
            <li>
              Coordinated with team members on content dependencies, asset
              management, and launch-readiness deliverables.
            </li>
            <li>
              Performed comprehensive cross-device layout testing, refinement,
              and final quality assurance application updates.
            </li>
          </ul>

          <div className="bg-slate-900/50 rounded-xl p-6 border-l-4 border-emerald-500 relative">
            <svg
              className="absolute top-4 left-4 w-8 h-8 text-emerald-500/20"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <div className="relative z-10 ml-8">
              {/* 5-Star Rating */}
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 italic mb-4 leading-relaxed">
                "You understood the tasks well and executed like a well
                organized professional. You have everything it takes to be a
                great team member to other institutions in the future. It was a
                pleasure working with you."
              </p>
              <p className="text-slate-300 italic mb-4 leading-relaxed">
                "Stayed precisely on time and tracked his hours really well."
              </p>
              <p className="text-emerald-400 font-semibold text-right">
                — Peter Lejkowski, CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
