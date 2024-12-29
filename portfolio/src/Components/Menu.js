import React, { useState, useRef, useEffect } from "react";
import "./Menu.css"; // Make sure your styles are in this file

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls the visibility of the menu
  const [isLoaded, setIsLoaded] = useState(false); // To control the initial loading and animation of the house icon

  const trackRef = useRef(null);

  useEffect(() => {
    // Trigger the fade-in effect after the component is mounted
    setIsLoaded(true);
  }, []);

  const handleOnDown = (e) => {
    trackRef.current.dataset.mouseDownAt = e.clientX;
  };

  const handleOnUp = () => {
    const track = trackRef.current;
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage || "0";
  };

  const handleOnMove = (e) => {
    const track = trackRef.current;
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained =
      parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    const images = track.getElementsByClassName("image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  const handleImageClick = (id) => {
    console.log(id); // Logs the ID of the clicked image
  };

  const images = [
    { src: "https://drive.google.com/thumbnail?id=1oO406roXVYrU6wo8jPN2qyeBgukObxVG&sz=w1000", alt: "cv", id: "cv" },
    { src: "https://drive.google.com/thumbnail?id=1LXH93tm22YsI4FlafTCPx2JHu9WrnfuO&sz=w1000", alt: "skills", id: "skills" },
    { src: "https://drive.google.com/thumbnail?id=1VxNHQ3K9CP1tIoE-o1SzgLz42kbiOVw3&sz=w1000", alt: "goals", id: "goals" },
    { src: "https://drive.google.com/thumbnail?id=1mVwyoZaYy_Q5TzbGnlaFyWzpD9ftb_ow&sz=w1000", alt: "hobbies", id: "hobbies" },
    { src: "https://drive.google.com/thumbnail?id=10tq1kN7PzNCUwteclWiVLnwActBY7HcZ&sz=w1000", alt: "personal life", id: "personalLife" },
    { src: "https://drive.google.com/thumbnail?id=1vSO6vmjtUr4UOutyOxwxZxGmP_ViW7vb&sz=w1000", alt: "project ideas", id: "projectIdeas" },
    { src: "https://drive.google.com/thumbnail?id=1R2YFfqRi8EJLXJEJ5W8Y61DkSk4oikUP&sz=w1000", alt: "future plans", id: "futurePlans" },
  ];

  return (
    <div>
      {/* Button to toggle visibility */}
      <div
        className={`menu-label ${isLoaded && !isVisible ? "visible" : ""} ${isVisible ? "hidden" : ""}`}
        onClick={() => setIsVisible(!isVisible)} // Toggle visibility of the menu
      >
        {/* Font Awesome House Icon */}
        <i className="fas fa-home"></i>
      </div>

      {/* Menu Container */}
      <div
        className={`site-container ${isVisible ? "visible" : ""}`}
        onMouseDown={handleOnDown}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onMouseUp={handleOnUp}
        onTouchEnd={(e) => handleOnUp(e.touches[0])}
        onMouseMove={handleOnMove}
        onTouchMove={(e) => handleOnMove(e.touches[0])}
      >
        <div
          id="image-track"
          ref={trackRef}
          data-mouse-down-at="0"
          data-prev-percentage="0"
        >
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="image"
              draggable="false"
              id={image.id}
              onClick={() => handleImageClick(image.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
