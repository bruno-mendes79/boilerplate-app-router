'use client'
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
html {
  font-size: 62.5%;
}
html, body, #__next{
height: 100%;
}

`

export default GlobalStyles
