import React, { useState, useRef, useEffect } from "react";
import "./Menu.css";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false); // Controls the visibility of the menu
  const [isLoaded, setIsLoaded] = useState(false); // To control the initial loading and animation of the house icon
  const [isTitleVisible, setIsTitleVisible] = useState(false); // Controls the main-title visibility
  const [titleText, setTitleText] = useState("Welcome to my portfolio!"); // Controls the dynamic text

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

  const handleImageHover = (altText) => {
    setTitleText(altText); // Update the title text when hovering over an image
  };

  const handleMouseLeave = () => {
    setTitleText("Welcome to my portfolio!"); // Reset title text when mouse leaves the image
  };

  const images = [
    { src: "https://drive.google.com/thumbnail?id=1Z8ZSvNGThpcOqNZDWnK9F75SkkZwKVVO&sz=w1000", alt: "About Me", id: "about-me" },
    { src: "https://drive.google.com/thumbnail?id=1AXe6UivC9rzeCaXkJFh4WCfUxIUY49Ou&sz=w1000", alt: "Skills", id: "skills" },
    { src: "https://drive.google.com/thumbnail?id=1uhnrHwzf5Rwljm-AvNBSqMzC2TwREQgQ&sz=w1000", alt: "Projects", id: "projects" },
    { src: "https://drive.google.com/thumbnail?id=1HuDobjtlXNVioKj5QlwBSFzaPOwELH7Y&sz=w1000", alt: "Social Media", id: "social-media" },
    { src: "https://drive.google.com/thumbnail?id=1ZB0Q_WrRjvMrHQFDn8bwMUn369261G4d&sz=w1000", alt: "Interests and Hobbies", id: "interests-and-hobbies" },
    { src: "https://drive.google.com/thumbnail?id=1ro2plxe-LJfcWxAI__qvOGdluGQdD6oA&sz=w1000", alt: "Services", id: "services" },
    { src: "https://drive.google.com/thumbnail?id=1FQYztdiVPUQerrEOspBqx6lr0PlO8stM&sz=w1000", alt: "Contact Me", id: "contact-me" },
  ];

  return (
    <div>
      <div className={`main-title ${isTitleVisible ? "visible" : ""}`}>
        <h1 className="raleway-thin-font-weight-100">{titleText}</h1>
      </div>
      {/* Button to toggle visibility */}
      <div
        className={`menu-label ${isLoaded && !isVisible ? "visible" : ""} ${isVisible ? "hidden" : ""}`}
        onClick={() => {
          setIsVisible(!isVisible);
          setIsTitleVisible(!isTitleVisible); // Toggle title visibility
        }}
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
              onMouseEnter={() => handleImageHover(image.alt)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
