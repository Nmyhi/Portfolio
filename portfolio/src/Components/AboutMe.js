import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const AboutMe = ({onBack}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isComponentVisible, setIsComponentVisible] = useState(false); // Controls the whole component fade-in

  const sections = [
    {
      title: "About Me",
      content: (
        <p className="raleway-thin-font-weight-100">
          Hi, I'm from Hungary, and my journey has always been driven by a deep passion for technology. Originally trained as an Electronics Engineer, I recently earned my Level 5 qualification as a Full Stack Web Developer. My current role is Operations Supervisor at <strong>PHOS</strong>, a multi-award-winning British family business.
        </p>
      ),
    },
    {
      title: "Passion for Creativity",
      content: (
        <p className="raleway-thin-font-weight-100">
          My passion for technology extends beyond my job, I love working on laser-cutting and engraving projects, a hobby that eventually led me to discover my interest in web development. I’m also fascinated by lighting design and even create <strong>biophilic cardboard lampshades</strong> as a blend of my technical and creative skills.
        </p>
      ),
    },
    {
      title: "Achievements",
      content: (
        <p className="raleway-thin-font-weight-100">
          Some of my proudest achievements include:
          <ul>
            <li className="raleway-thin-font-weight-100">Building a <strong>self-made laser cutter</strong> and completing intricate engraving projects.</li>
            <li className="raleway-thin-font-weight-100">Earning my Full Stack Web Developer certificate in just a year.</li>
            <li className="raleway-thin-font-weight-100">Moving to the UK, mastering English, and carving out a successful career path.</li>
            <li className="raleway-thin-font-weight-100">Being recognized as the top salesperson of the month at an MLM company.</li>
          </ul>
        </p>
      ),
    },
    {
      title: "Hobbies and Interests",
      content: (
        <p className="raleway-thin-font-weight-100">
          Outside of work, I’m an avid sports enthusiast. Whether it’s <strong>gym, badminton, football, archery, table tennis, pool</strong>, or even <strong>board games and video games</strong>, I thrive on both physical and mental challenges. I’m also a movie lover and dedicated to constant self-improvement.
        </p>
      ),
    },
    {
      title: "Future Goals",
      content: (
        <p className="raleway-thin-font-weight-100">
          Looking ahead, my ultimate goal is to become a professional developer and shape my future around <strong>remote developer positions</strong>, combining my love for technology with a flexible, creative career. My colleagues often describe me as a hard worker (and maybe a little hard on myself!), but I believe in pushing my limits to achieve excellence.
        </p>
      ),
    },
  ];

  const handleNext = () => {
    setIsFading(true); // Trigger fade-out
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % sections.length);
      setIsFading(false); // Trigger fade-in
    }, 500); // Match CSS animation duration
  };

  const handlePrev = () => {
    setIsFading(true); // Trigger fade-out
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length);
      setIsFading(false); // Trigger fade-in
    }, 500); // Match CSS animation duration
  };

  useEffect(() => {
    setTimeout(() => setIsComponentVisible(true), 500); // Ensure the entire component fades in on mount
  }, []);

  return (
    <div className={`about-me-container ${isComponentVisible ? "fade-in" : ""}`}>
      <div className="about-me-wrapper">
        <div className="about-me-image">
          <img
            src="https://drive.google.com/thumbnail?id=1kW8D-O8deOFC9wPGz9vtjTWclvpIJUhJ&sz=w1000"
            alt="About Me"
          />
        </div>
        <div className="about-me-carousel">
          <div className={`carousel-content ${isFading ? "fade-out" : "fade-in"}`}>
            <h1 className="carousel-title">{sections[activeIndex].title}</h1>
            {sections[activeIndex].content}
          </div>
          <div className="carousel-controls">
            <button className="prev-button" onClick={handlePrev}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="next-button" onClick={handleNext}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="home-wrapper">
        <div className="home-button">
          <i className="fas fa-home" onClick={onBack}></i>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
