// Constants for minimum and maximum font size
export const MIN_FONT_SIZE = 16;
export const MAX_FONT_SIZE = 36;
// Proportions for grid and header sizes in landscape/portrait orientations
export const LANDSCAPE_HEADER_HEIGHT_PROP = 25;
export const PORTRAIT_HEADER_HEIGHT_PROP = 25;

export const setCSSProperty = (property, value) => {
    document.documentElement.style.setProperty(property, `${value}px`);
};

export const calculateHeaderSize = (isLandscape, vw, vh) => {
    console.log(`isLandscape: ${isLandscape}, vw: ${vw}, vh: ${vh}`);
    let headerWidth, headerHeight;
    if (isLandscape) {
        headerWidth = LANDSCAPE_HEADER_HEIGHT_PROP * vw;
        headerHeight = 100 * vh;
    } else {
        headerWidth = 100 * vw;
        headerHeight = PORTRAIT_HEADER_HEIGHT_PROP * vh;
    }
    console.log("inside calculateHeaderSize, headerHeight is: " + headerHeight)
    console.log("inside calculateHeaderSize, headerWidth is: " + headerWidth)
    return {headerWidth, headerHeight};
};

export const setViewportAndFontSizes = (vh, vw, vmin) => {
    // Set viewport and font sizes
    setCSSProperty('--vh', vh);
    setCSSProperty('--vw', vw);
    setCSSProperty('--vmin', vmin);
}
