import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background : ${({theme}) => theme.buttonBackGroundColor }
    border: ${({theme}) => theme.buttonBorder }
`;

const Toogle = ({ themeLabel, toogleTheme}) => {
    return(
        <Button onClick={toogleTheme} >
            {themeLabel}
        </Button>      
    );
};

export default Toogle;