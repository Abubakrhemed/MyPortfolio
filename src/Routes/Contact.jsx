import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mqaqveob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResult("Error sending message.");
    }
  };

  return (
    <div className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am currently seeking full-stack and backend opportunities where I
            can deliver scalable solutions and drive immediate impact. My inbox
            is always open.
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Opportunity Inquiry"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="How can we work together?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Send Message
            </button>
            {result && (
              <p
                className={`text-center mt-4 font-medium ${result.includes("successfully") ? "text-emerald-400" : result.includes("Sending") ? "text-blue-400" : "text-red-400"}`}
              >
                {result}
              </p>
            )}
          </form>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6">
            Connect With Me
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://www.linkedin.com/in/abubakr-hemed-743bab322/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-[#0A66C2] text-slate-200 hover:text-white border border-slate-700 hover:border-[#0A66C2] font-medium py-3 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/Abubakrhemed"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-slate-800 hover:bg-[#0A66C2] text-slate-200 border border-slate-700 font-medium py-3 px-8 rounded-lg transition-all duration-300 w-full sm:w-auto"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
