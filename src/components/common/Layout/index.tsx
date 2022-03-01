import React, { FC } from "react";
import { ReactNode } from "typings";
import Head from "next/head";

import { Box } from "components/common/Core/Box";
import { Theme } from "styles/Theme";
import Header from "components/common/Header";
import NavBar from "../NavBar";
import { Container } from "./styled";

interface LayoutPrpos {
  children: ReactNode;
  themeMode: "dark" | "light";
  theme: Theme;
  onToggle: () => void;
}

const Layout: FC<LayoutPrpos> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Simple VS Code Theme Creator" />
        <meta name="author" content="VS Code Theme Creator" />
        <meta name="author" content="VS Code Theme Creator" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Simple VS Code Theme Creator" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/card.png" /> */}
        <title>Theme Creator</title>
      </Head>
      <Container
        dp="flex"
        p="20px"
        fd="column"
        m="0 auto"
        mxw="1600px"
        w="100%"
        g="20px"
      >
        <Header />
        <Box dp="flex" fd="row" fx="1" g="20px">
          <NavBar />
          <Box dp="flex" fx="1" w="100%">
            {children}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
