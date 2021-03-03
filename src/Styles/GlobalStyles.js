import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat';
        font-weight: bold
    }
    div#root {
        width: 100%;
        height: 100%;
        overflow-x: hidden!important;

    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        margin: 0;    
        padding: 0;    
        transition: all 0.25s linear;
        overflow-x: hidden!important;

    }
    @media(max-width: 768px){
        div#root{
            
        }
    }
`

