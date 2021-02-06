import '../digibodies/bootstrap';

// --- Post bootstrap -----
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import getPageContext from '../digibodies/getPageContext';

import userTheme from '../src/theming';

class DigibodiesApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    let description =
      'Archives of the DIY music scene of NorthWest Wisconsin circa 1997-2003';
    let imageHeight = 427;
    let imageWidth = 900;

    let image =
      'https://storage.googleapis.com/cdn.mplsart.com/ultratemp/localm-org-social-card.jpg';
    return (
      <Container>
        <Head>
          <title>Local Music Online</title>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content="Local Music Online" />
          <meta itemProp="name" content="Local Music Online" />

          <meta property="og:url" content="http://www.localm.org" />

          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta itemProp="description" content={description} />

          <meta name="image" content={image} />
          <meta property="og:image" content={image} />
          <meta property="og:image:height" content={imageHeight} />
          <meta property="og:image:width" content={imageWidth} />

          <meta
            name="keywords"
            content="local, music, online, wisconsin, diy, punk, metal, indie, music"
          />

          <meta name="twitter:card" content={image} />
          <meta name="twitter:title" content="Local Music Online" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content="@blainegarret" />
          <meta name="twitter:image:src" content={image} />

          <meta property="og:type" content="url" />
          <meta property="og:site_name" content="LOCALM.ORG" />
          <meta property="og:locale" content="en_US" />
        </Head>
        {/* Wrap every page in Styles and Theme providers */}
        <StylesProvider
          generateClassName={this.pageContext.generateClassName}
          sheetsRegistry={this.pageContext.sheetsRegistry}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={this.pageContext.theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <userTheme.GlobalStyles />

            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server-side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </Container>
    );
  }
}

export default DigibodiesApp;
