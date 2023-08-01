export const MIN_FONT_SIZE = 16;
export const MAX_FONT_SIZE = 36;

// Proportion of the screen a header should take up
export const LANDSCAPE_HEADER_HEIGHT_PROP = 25;
export const PORTRAIT_HEADER_HEIGHT_PROP = 25;

// Set a specific CSS property to a given value
export const setCSSProperty = (property, value) => {
    document.documentElement.style.setProperty(property, `${value}px`);
};

// Calculate the header size based on the viewport size and orientation
export const calculateHeaderSize = (isLandscape, vw, vh) => {
    let headerWidth, headerHeight;
    if (isLandscape) {
        headerWidth = LANDSCAPE_HEADER_HEIGHT_PROP * vw;
        headerHeight = 100 * vh;
    } else {
        headerWidth = 100 * vw;
        headerHeight = PORTRAIT_HEADER_HEIGHT_PROP * vh;
    }
    return {headerWidth, headerHeight};
};

// Set viewport and font sizes
export const setViewportAndFontSizes = (vh, vw, vmin) => {
    setCSSProperty('--vh', vh);
    setCSSProperty('--vw', vw);
    setCSSProperty('--vmin', vmin);
}
