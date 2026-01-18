import { useState, useEffect } from 'react';

export const useScramble = (texts, speed = 60, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentText = texts[index % texts.length];
    let iteration = 0;
    let timer = null;
    let interval = null;

    const chars = '!<>-_\\/[]{}—=+*^?#________';

    interval = setInterval(() => {
      const result = currentText
        .split("")
        .map((letter, i) => {
          if (i < iteration) {
            return currentText[i];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      
      setDisplayText(result);

      iteration += 1; 

      if (iteration > currentText.length) {
        clearInterval(interval);
        setDisplayText(currentText); 
        
        timer = setTimeout(() => {
          setIndex(prev => prev + 1);
        }, pauseTime);
      }
    }, speed);

    return () => {
      clearInterval(interval);
      if (timer) clearTimeout(timer);
    };
  }, [index, texts, speed, pauseTime]);

  return displayText;
};