import { useCallback } from 'react';

const useMinusCount = (items, currentIndex, setItems, updateCartItems) => {
    return useCallback(() => {
        const newItems = [...items];
        if (newItems[currentIndex].count > 1) {
            newItems[currentIndex].count -= 1;
            setItems(newItems);
            updateCartItems(newItems);
        }
    }, [items, currentIndex, setItems, updateCartItems]);
};

export default useMinusCount;
