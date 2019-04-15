import { createGlobalStyle } from 'styled-components'
import 'font-awesome/css/font-awesome.css'

// global styles used throughout app
const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #9B65E6;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: sans-serif;
    }
`
export default GlobalStyles;
