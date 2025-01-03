import React from "react";
import "./AboutMe.css"; // Ensure this CSS file has styles for the updated component

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h1 className="about-me-title">About Me</h1>
      <p className="about-me-text">
        Hi, I'm from Hungary, and my journey has always been driven by a deep passion for technology. Originally trained as an Electronics Engineer, I recently earned my Level 5 qualification as a Full Stack Web Developer. My current role is Operations Supervisor at <strong>PHOS</strong>, a multi-award-winning British family business in the lighting industry.
      </p>
      <p className="about-me-text">
        My passion for technology extends beyond my job—I love working on laser-cutting and engraving projects, a hobby that eventually led me to discover my interest in web development. I’m also fascinated by lighting design and even create <strong>biophilic cardboard lampshades</strong> as a blend of my technical and creative skills.
      </p>
      <p className="about-me-text">
        One of my greatest joys is learning—whether it's mastering new technologies or finding innovative ways to solve problems. I consider my ability to learn quickly and my thirst for knowledge to be my greatest strengths.
      </p>
      <p className="about-me-text">
        Some of my proudest achievements include:
        <ul>
          <li>Building a <strong>self-made laser cutter</strong> and completing intricate engraving projects.</li>
          <li>Earning my Full Stack Web Developer certificate in just a year.</li>
          <li>Moving to the UK, mastering English, and carving out a successful career path.</li>
          <li>Being recognized as the top salesperson of the month at an MLM company.</li>
        </ul>
      </p>
      <p className="about-me-text">
        Outside of work, I’m an avid sports enthusiast. Whether it’s <strong>gym, badminton, football, archery, table tennis, pool</strong>, or even <strong>board games and video games</strong>, I thrive on both physical and mental challenges. I’m also a movie lover and dedicated to constant self-improvement.
      </p>
      <p className="about-me-text">
        Looking ahead, my ultimate goal is to become a professional developer and shape my future around <strong>remote developer positions</strong>, combining my love for technology with a flexible, creative career. My colleagues often describe me as a hard worker (and maybe a little hard on myself!), but I believe in pushing my limits to achieve excellence.
      </p>
    </div>
  );
};

export default AboutMe;
