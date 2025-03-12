import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles // Adds your GlobalStyle component to all stories
  })
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
