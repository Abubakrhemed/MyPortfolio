import React, { useState, useEffect, useRef } from 'react';
import '../Styles/ContactStyles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState('');
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mqaqveob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResult('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setResult(''), 5000);
      } else {
        setResult('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setResult('Error sending message.');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  return (
    <div className="formSection">
      <h1>Contact Me</h1>
      <div
        ref={formRef}
        className={`form-wrapper ${isVisible ? 'fade-in-form' : ''}`}
      >
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn">Submit</button>
        </form>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default Contact;
