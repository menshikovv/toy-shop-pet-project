import { useCallback } from "react";

const useHandlePrevious = (currentIndex, setCurrentIndex) => {
    return useCallback(() => {
        if(currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }, [currentIndex, setCurrentIndex]);
};

export default useHandlePrevious;