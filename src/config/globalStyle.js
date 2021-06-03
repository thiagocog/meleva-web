import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap'); // font-family: 'Comfortaa', cursive;
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'); // font-family: 'IBM Plex Mono', monospace;

    * {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'IBM Plex Mono', monospace;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Comfortaa', cursive;
    }

    a {
        text-decoration: none;
    }

    ol, ul {
        list-style: none;
        margin: 0;
    }

    .container {
        width: 72vw !important;
        padding: 0 !important;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #F2F2F2;
        position: relative;
    }
`

export default GlobalStyle
