import { useEffect, useState, useMemo } from 'react';
import { useWindowSize } from './useWindowSize';
import throttle from 'lodash/throttle';
import { 
    setCSSProperty, 
    calculateHeaderSize, 
    setViewportAndFontSizes 
} from '../utils/cssPropertyUtils';

export const useViewportSettings = () => {
    const { width, height } = useWindowSize();
    const [isSizeCalculated, setIsSizeCalculated] = useState(false);

    const throttledResize = useMemo(
        () =>
            throttle(() => {
                if (typeof height !== "undefined" && typeof width !== "undefined") {
                    setIsSizeCalculated(false);
                    console.log("inside throttledResize, height is: " + height)
                    console.log("inside throttledResize, width is: " + width)
                    const vh = height * 0.01;
                    const vw = width * 0.01;
                    const vmin = Math.min(vh, vw);
    
                    setViewportAndFontSizes(vh, vw, vmin);
    
                    // Calculate grid size and header size based on orientation
                    const isLandscape = width > height;
                    const gridSize = 70 * vmin;
                    setCSSProperty("--grid-size", gridSize);
    
                    // Calculate header size
                    const { headerWidth, headerHeight } = calculateHeaderSize(
                        isLandscape,
                        vw,
                        vh
                    );
                    setCSSProperty("--header-width", headerWidth);
                    setCSSProperty("--header-height", headerHeight);
                    
                    setIsSizeCalculated(true);
                }
            }, 200, { trailing: true }),
        [width, height]
    );
    

    useEffect(() => {
        // Invoke the throttled function immediately on mount
        throttledResize();
    
        // Then set it up as a handler for resize events
        const handleResize = () => throttledResize();
    
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            throttledResize.cancel(); // Cancel any pending executions
        }
    }, [throttledResize]);
    

    return isSizeCalculated;
};
