import { useState } from 'react';

/**
 * Hook para gerenciamento de estado de Modal/Lightbox
 * @returns {Object} - { isOpen, selectedItem, openModal, closeModal }
 */
export const useModal = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return {
    isOpen: !!selectedItem,
    selectedItem,
    openModal,
    closeModal
  };
};