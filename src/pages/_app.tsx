import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { theme } from '../../styles/theme'
import Header from '../components/Header'
import "../../styles/swiperTheme.scss"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
export default function App({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
  
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
