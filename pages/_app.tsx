import { RecoilRoot } from "recoil";
import { globalStyles } from "styles/globals";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {globalStyles}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
