import { useCallback } from 'react';

const useHandleNext = (currentIndex, setCurrentIndex, items) => {
    return useCallback(() => {
        if (currentIndex < items.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    }, [currentIndex, setCurrentIndex, items]);
};

export default useHandleNext;
