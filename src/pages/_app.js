import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from "react-redux";
import store from '../redux/store';
import Wrapper from '../layouts/Wrapper';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <CssBaseline />
        <NextNProgress color="#ff0000" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Component {...pageProps} />
      </Wrapper>
    </Provider>

  )

}

export default MyApp
