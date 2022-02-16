import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import { Container } from "components/app/styled";
import useTheme from "hooks/useTheme";
import GlobalStyle from "styles/GlobalStyle";
import { default as THEME } from "styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, onToggle] = useTheme();

  return (
    <ThemeProvider theme={THEME[theme]}>
      <RecoilRoot>
        <Global styles={GlobalStyle(THEME[theme])} />
        <Container>
          <Component {...pageProps} />
        </Container>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
