import React, { useState, useEffect } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [text, setText] = useState('web applications');
  const [color, setColor] = useState('white');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText === 'web applications') {
          setColor('yellow');
          return 'Mobile Applications';
        } else if (prevText === 'Mobile Applications') {
          setColor('green');
          return 'PHP Applications';
        } else {
          setColor('red');
          return 'web applications';
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#915eff]">Juaquin</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-whte-100`}>I develop <span className="web-applications" style={{ color }}>{text}</span> <br className="sm:block hidden"/> with specialization in backend development</p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
