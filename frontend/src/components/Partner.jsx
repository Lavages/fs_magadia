import React from "react";
import Marquee from "react-fast-marquee";
import Partner1 from "../assets/partner/kisko.png";

const logos = [
  Partner1,
  Partner1,
  Partner1,
  Partner1,
  Partner1,
  Partner1,
  Partner1,
];

const Partner = () => {
  return (
    <section className="bg-primary py-6 px-4">
      <h2 className="text-white text-lg font-semibold mb-4 text-center">
        Our Partner
      </h2>
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-md shadow-md mx-4 px-20 py-8 flex items-center justify-center"
          >
            <img
              src={logo}
              alt="Partner Logo"
              className="h-18 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Partner;
