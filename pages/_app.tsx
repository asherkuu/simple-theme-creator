import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { Global, ThemeProvider } from "@emotion/react";

import Layout from "components/common/Layout";
import Font from "components/common/font";

import useTheme from "hooks/useTheme";
import GlobalStyle from "styles/GlobalStyle";
import { default as THEME } from "styles/Theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, onToggle] = useTheme();

  return (
    <RecoilRoot>
      <ThemeProvider theme={THEME[theme]}>
        {/* <Font /> */}
        <Global styles={GlobalStyle(THEME[theme])} />
        <Layout themeMode={theme} theme={THEME[theme]} onToggle={onToggle}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
