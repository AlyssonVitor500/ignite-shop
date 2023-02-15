import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

import { HeaderComponent } from '../components/headerComponent'
import { ItemsContextProvider } from '../context/itensContext'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ItemsContextProvider>
        <HeaderComponent />
        <Component {...pageProps} />
        <ToastContainer />
      </ItemsContextProvider>
    </Container>
  )
}
