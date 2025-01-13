import React, { useEffect, useState } from "react";

export const AnimatedSVG = (i:number) => {
  const baseColor = "#3498db"; // Light blue
  const endColor = "#ffffff"; // White
  const [colors, setColors] = useState(generateInitialColors(baseColor, endColor));

  // Function to generate initial shades between baseColor and endColor
  function generateInitialColors(base, end) {
    const steps = 60; // Number of shades
    const shades = [];
    for (let i = 0; i < steps; i++) {
      shades.push(interpolateColor(base, end, i / (steps - 1)));
    }
    return shades;
  }

  // Function to interpolate between two colors
  function interpolateColor(color1, color2, factor) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const result = {
      r: Math.round(c1.r + (c2.r - c1.r) * factor),
      g: Math.round(c1.g + (c2.g - c1.g) * factor),
      b: Math.round(c1.b + (c2.b - c1.b) * factor),
    };
    return rgbToHex(result.r, result.g, result.b);
  }

  // Convert hex color to RGB
  function hexToRgb(hex) {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  }

  // Convert RGB to hex
  function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  useEffect(() => {
    console.log(5*i,"col")
      setColors((prevColors) =>
        prevColors.map((color) =>
          lightenColor(color, 5+i)
        )
      );
  }, []);

  const lightenColor = (color:any, percent:any) => {
    const num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      r = (num >> 16) + amt,
      g = ((num >> 8) & 0x00ff) + amt,
      b = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (r < 255 ? (r < 1 ? 0 : r) : 255) * 0x10000 +
        (g < 255 ? (g < 1 ? 0 : g) : 255) * 0x100 +
        (b < 255 ? (b < 1 ? 0 : b) : 255)
      )
        .toString(16)
        .slice(1)
    );
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 60">
      <rect fill="#cc5577" width="100" height="60" />
      <g fillOpacity="1">
        {colors.map((color, index) => (
          <rect
            key={index}
            fill={color}
            x={(index % 10) * 10}
            y={Math.floor(index / 10) * 10}
            width="11"
            height="11"
          />
        ))}
      </g>
    </svg>
  );
};
