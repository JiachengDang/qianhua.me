import React, { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Artist', 'Designer', 'Traveller'];
const LandingPage = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((curr) => curr + 1),
      4000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="relative bg-[url('/landing/head_mobile.jpg')] xl:bg-[url('/landing/head.jpg')] bg-cover bg-no-repeat bg-center w-screen h-screen text-[88px] lg:text-[180px] text-black font-bold whitespace-pre-line leading-normal subpixel-antialiased">
      <div className="  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <TextTransition springConfig={presets.slow}>
          {
            <span className="bg-gradient-to-r from-white to-white text-transparent bg-clip-text ">
              {TEXTS[index % TEXTS.length]}
            </span>
          }
        </TextTransition>
      </div>
    </div>
  );
};

export default LandingPage;
