import { useState, useEffect } from 'react';

/**
 * Hook para efeito de "Scramble" (Decodificação) de texto
 * @param {string[]} texts - Array de textos para alternar
 * @param {number} speed - Velocidade de atualização em ms (quanto menor, mais rápido)
 * @param {number} pauseTime - Tempo de pausa com o texto completo em ms
 * @returns {string} - Texto atual com efeito
 */
export const useScramble = (texts, speed = 60, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentText = texts[index % texts.length];
    let iteration = 0;
    let timer = null;
    let interval = null;

    // Caracteres usados no efeito visual (Matrix/Cyberpunk style)
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    interval = setInterval(() => {
      // Reconstrói o texto: parte revelada + parte embaralhada
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

      // Incremento de 1 garante que a animação progrida 1 caractere por ciclo (speed)
      iteration += 1; 

      // Quando todo o texto for revelado
      if (iteration > currentText.length) {
        clearInterval(interval);
        setDisplayText(currentText); // Limpa qualquer lixo visual final
        
        // Inicia a pausa estrita antes de trocar para a próxima palavra
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