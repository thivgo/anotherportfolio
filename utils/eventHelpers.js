export const stopPropagation = (e) => {
  if (e && e.stopPropagation) {
    e.stopPropagation();
  }
};