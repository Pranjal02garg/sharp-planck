"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Char = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ opacity: 0.2 }}>{char}</span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
        }}
        aria-hidden="true"
      >
        {char}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className, style }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  
  const wordsWithIndices = words.map((word, wi) => {
    const wordChars = Array.from(word);
    const wordStart = words.slice(0, wi).reduce((acc, prevWord) => acc + prevWord.length + 1, 0);
    return { word, wordChars, wordStart };
  });

  return (
    <p ref={ref} className={className} style={style}>
      {wordsWithIndices.map(({ word, wordChars, wordStart }, wi) => {
        return (
          <span
            key={wi}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {wordChars.map((ch, ci) => (
              <Char
                key={ci}
                char={ch}
                index={wordStart + ci}
                total={totalChars}
                progress={scrollYProgress}
              />
            ))}
            {wi < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
