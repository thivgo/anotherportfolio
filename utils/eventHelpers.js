/**
 * Impede a propagação do evento para elementos pai
 * @param {Event} e - O evento do navegador
 */
export const stopPropagation = (e) => {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
};