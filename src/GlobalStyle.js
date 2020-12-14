import { createGlobalStyle } from "styled-components";

export const GlobalLayout = createGlobalStyle`

body {
    background : ${({theme}) => theme.body };
    transition: all 0.20s linear;
    font-weight: bolder;
	font-size: x-large;
}

input {
    background : ${({theme}) => theme.inputBackgroundColor };  
    border: solid ${({theme}) => theme.inputBorder } 1;  
    color: ${({theme}) => theme.inputTextColor };
    transition: all 0.20s linear;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 30;
    border: solid ${({theme}) => theme.buttonBorder };
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center; 
}

button {
    background : ${({theme}) => theme.buttonBackgroundColor };
    color: ${({theme}) => theme.buttonTextColor };
    transition: all 0.20s linear;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    font-family: Open Sans;
    font-size: 20px;
    font-weight: 30;
    border: solid ${({theme}) => theme.buttonBorder };
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;   
}

#conteudo {
	width: 552px;
	min-height: 250px;
	border: 1px solid ${({theme}) => theme.borda };;
	text-align: center;
	padding-top: 90px;
}

#texto{
    color: ${({theme}) => theme.text };
}

`;