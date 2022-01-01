import '../styles/tailwind.css'
import '@fontsource/inter'
import '@fontsource/poppins'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
