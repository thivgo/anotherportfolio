import { useState, useEffect } from 'react';

/**
 * Hook para efeito de máquina de escrever
 * @param {string[]} texts - Array de textos para alternar
 * @param {number} speed - Velocidade de digitação em ms
 * @returns {string} - Texto atual a ser exibido
 */
export const useTypewriter = (texts, speed = 150) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      // Aumenta a velocidade quando está apagando
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        // Pausa antes de começar a apagar
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && displayText === '') {
        // Passa para a próxima palavra
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, texts, typingSpeed]);

  return displayText;
};