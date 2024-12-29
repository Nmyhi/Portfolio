import React, { useRef } from "react";
import "./Menu.css"; // Assuming styles for .site-container and .image are in this CSS file

const Menu = () => {
  const trackRef = useRef(null);

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
    <div
      className="site-container"
      onMouseDown={handleOnDown}
      onTouchStart={(e) => handleOnDown(e.touches[0])}
      onMouseUp={handleOnUp}
      onTouchEnd={(e) => handleOnUp(e.touches[0])}
      onMouseMove={handleOnMove}
      onTouchMove={(e) => handleOnMove(e.touches[0])}
    >
      <div id="image-track" ref={trackRef} data-mouse-down-at="0" data-prev-percentage="0">
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
  );
};

export default Menu;
