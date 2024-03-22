import type { AppProps } from 'next/app'
import { AMPLIFY_CONFIG } from '@services/amplify'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@globals/index'
import { theme } from '@globals/theme'
import { Amplify } from 'aws-amplify'
import { AuthProvider } from '@hooks/useAuth'

Amplify.configure(AMPLIFY_CONFIG)

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
