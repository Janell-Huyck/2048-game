export function textFitsContainer(textRef, checkedRef, additionalOffsetRefs = {width: [], height: []}) {
    console.log("textRef is:", textRef);
    const element = checkedRef.current;
    console.log("element is:", element);
    const style = window.getComputedStyle(element);

    // Consider the padding in the calculations
    const horizontalPadding = parseInt(style.paddingLeft) + parseInt(style.paddingRight);
    const verticalPadding = parseInt(style.paddingTop) + parseInt(style.paddingBottom);

    const fontSize = parseFloat(style.fontSize); 
    console.log("fontSize inside textFitsContainer is:", fontSize)


    // Calculate additional offsets
    let additionalOffsetWidth = additionalOffsetRefs.width.reduce((sum, ref) => sum + ref.current?.offsetWidth, 0);
    let additionalOffsetHeight = additionalOffsetRefs.height.reduce((sum, ref) => sum + ref.current?.offsetHeight, 0);

    // Calculate the total margin between paragraphs
    const childParagraphs = textRef.current.childNodes;
    let totalMargin = 0;

    childParagraphs.forEach((p) => {
        const style = window.getComputedStyle(p);
        // assuming margins are same on top and bottom, so just multiply by 2
        totalMargin += parseFloat(style.marginTop) * 2;
    });
    additionalOffsetHeight += totalMargin;
    console.log('Total margin between paragraphs: ', totalMargin);
    

    let containerHeight = element.offsetHeight - verticalPadding - additionalOffsetHeight;
    let containerWidth = element.offsetWidth - horizontalPadding - additionalOffsetWidth;

    // Estimates, may need to adjust
    const estimatedWidthPerChar = fontSize * 0.6;
    const estimatedHeightPerLine = fontSize * 1.2;

    // Estimate the number of characters that can fit per line (considering 10% extra for word wrap)
    const charsPerLine = Math.floor((containerWidth / estimatedWidthPerChar) * 0.9);
    const maxLines = Math.floor(containerHeight / estimatedHeightPerLine);
    console.log("charsPerLine is:", charsPerLine);
    console.log("maxLines is:", maxLines);

    // Estimate total number of characters that can fit in the container
    const totalFit = charsPerLine * maxLines;
    console.log("totalFit is:", totalFit);

    // Compare to text length
    const textLength = textRef.current?.innerText.length;
    console.log("textLength is:", textLength);

    return textLength <= totalFit;
}
