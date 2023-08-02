import '../public/css/main.css'
import '../public/css/overide.scss'
import '../public/css/responsive.scss'
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// store 

import store from '@/store/index';
import { Provider } from 'react-redux'

// mui 
import { ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
// mui end 
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import Panel from '@/components/navigation/Panel'

// Client-side cache shared for the whole session
// of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache =
        clientSideEmotionCache, pageProps } = props;

    return (
        <Provider store={store}>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta name="viewport"
                        content="initial-scale=1, width=device-width" />
                </Head>
                <ThemeProvider theme={theme}>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <Panel />
                        <Box
                            component="main"
                            sx={{
                                backgroundColor: 'var(--hover2)',
                                flexGrow: 1,
                                height: '100vh',
                                overflow: 'auto',
                                paddingTop: '28px'
                            }}
                        >
                            <Toolbar />
                            <Container maxWidth="xl" sx={{ mt: 3, mb: 3 }}>
                                <Component {...pageProps} />
                            </Container>
                        </Box>
                    </Box>
                </ThemeProvider>
            </CacheProvider>
        </Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
