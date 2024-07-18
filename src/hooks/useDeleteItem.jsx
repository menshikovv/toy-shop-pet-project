import { useCallback } from 'react';

const useDeleteItem = (items, currentIndex, setItems, setCurrentIndex, updateCartItems) => {
    return useCallback(() => {
        const newItems = items.filter((_, index) => index !== currentIndex);
        setItems(newItems);
        updateCartItems(newItems);
        if (newItems.length > 0) {
            setCurrentIndex(prevIndex => (prevIndex >= newItems.length ? newItems.length - 1 : prevIndex));
        } else {
            setCurrentIndex(0);
        }
    }, [items, currentIndex, setItems, setCurrentIndex, updateCartItems]);
};

export default useDeleteItem;
