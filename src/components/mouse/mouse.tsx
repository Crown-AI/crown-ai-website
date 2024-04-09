import React, { useEffect } from "react";

export function Mouse() {
  const MouseHandle: React.FC = () => {
    useEffect(() => {
      const mouse = document.getElementById("mouse") as HTMLImageElement;
      if (mouse) {
        const update = (y: MouseEvent) => {
          mouse.style.top = `${y.clientY}px`;
          mouse.style.left = `${y.clientX}px`;
        };
        window.addEventListener("mousemove", update);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
          window.removeEventListener("mousemove", update);
        };
      }
    }, []); // Empty dependency array ensures this effect runs once on mount

    return null; // This component doesn't render anything
  };
}

export default Mouse;
