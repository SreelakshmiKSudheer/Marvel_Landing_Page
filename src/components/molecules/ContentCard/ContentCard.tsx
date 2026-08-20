import { useState, useEffect } from "react";
import type { ContentCardProps } from "./ContentCard.types";

export const ContentCard = ({
  title,
  image,
  href = "#",
  description,
  detail, // Added the new prop here
  className = "",
}: ContentCardProps) => {
  // 1. State to hold our dynamic background color (defaults to marvel-black)
  const [bgColor, setBgColor] = useState("#151515");

  // 2. Effect to extract the color when the image loads
  useEffect(() => {
    const img = new Image();
    // Required if your images are hosted on an external CDN/domain
    img.crossOrigin = "Anonymous";
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Calculate a small strip on the left (e.g., 20% of the image width, min 1px)
        const leftStripWidth = Math.max(1, Math.floor(img.width * 1));

        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        // This crops the left strip of the original image and averages it into our 1x1 canvas
        ctx.drawImage(
          img,
          0,
          0,
          leftStripWidth,
          img.height, // Source coordinates (Crop)
          0,
          0,
          1,
          1, // Destination coordinates (1x1 Canvas)
        );

        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;

        // Darken the color slightly so white text remains readable
        setBgColor(`rgb(${r * 0.8}, ${g * 0.7}, ${b * 0.7})`);
      }
    };
  }, [image]);

  return (
    <a
      href={href}
      style={{
        backgroundImage: `linear-gradient(to right, #151515, ${bgColor})`,
      }}
      className={`group relative block h-full w-full overflow-hidden transition-colors duration-700 ${className}`}
    >
      {/* =========================================
          STATE 1: NORMAL IMAGE (Unhovered)
          ========================================= */}
      <img
        src={image}
        alt={title}
        className="
          absolute inset-0 h-full w-full object-cover
          transition-opacity duration-700 ease-in-out 
          lg:group-hover:opacity-0
        "
      />

      {/* =========================================
          STATE 2: HERO IMAGE (Hovered)
          ========================================= */}
      <img
        src={image}
        alt={`${title} expanded`}
        className="
          absolute inset-y-0 right-0 h-auto w-[60%] max-w-none object-cover
          opacity-0 
          transition-all duration-700 ease-in-out 
          lg:group-hover:opacity-100
        "
      />

      {/* Dark overlay for text readability (using a generic dark gradient) */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 lg:group-hover:opacity-80" />

      {/* =========================================
          STATE 1: NORMAL TEXT (Unhovered)
          ========================================= */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-opacity duration-500 text-center ease-in-out lg:group-hover:opacity-0 lg:group-hover:pointer-events-none">
        <h3 className="text-2xl font-bold uppercase tracking-[0.2rem] text-marvel-white">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-lg text-marvel-white/70 max-w-[70%] mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* =========================================
          STATE 2: HERO TEXT (Hovered)
          ========================================= */}
      {/* Changed: justify-center for vertical center, items-start for horizontal left */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 lg:p-10 text-left opacity-0 transition-opacity duration-500 ease-in-out lg:group-hover:opacity-100">
        <h3 className="text-3xl font-bold uppercase tracking-[0.2rem] text-marvel-white drop-shadow-md lg:text-4xl">
          {title}
        </h3>

        {/* Changed: Now conditionally rendering the 'detail' prop instead of 'description' */}
        {detail && (
          <p className="mt-4 text-base text-marvel-white/80 max-w-[70%]  drop-shadow-sm lg:text-lg">
            {detail}
          </p>
        )}
      </div>
    </a>
  );
};
