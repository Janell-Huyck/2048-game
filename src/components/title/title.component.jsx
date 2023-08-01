import React, {forwardRef} from 'react';
import { TitleContainer } from './title.styles.jsx';

const Title = forwardRef((props, ref) => {
        
    return (
        <TitleContainer ref={ref}>
            <h1>2048</h1>
        </TitleContainer>
    );
})

export default Title;