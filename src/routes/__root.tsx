/// <reference types="vite/client" />
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { CacheProvider } from "@emotion/react";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import fontsourceVariableRobotoCss from "@fontsource-variable/roboto?url";
import React from "react";
import { globalStyles, theme } from "~/setup/theme";
import PlayerUI from "~/components/player/Player";

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: fontsourceVariableRobotoCss }],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const emotionCache = createCache({ key: "css" });

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Local Music Online</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://storage.googleapis.com/mplsart-cdn-central/assets/fonts/Bryant/WOFF/Bryant.css"
          rel="stylesheet"
          type="text/css"
        />
        <HeadContent />
      </head>
      <body>
        <Providers>
          {children}
          <PlayerUI />
        </Providers>

        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}
