import React, { FC } from "react";
import { ReactNode } from "typings";
import Head from "next/head";

import NavBar from "components/common/NavBar";
import { Box } from "components/common/Core/Box";

interface LayoutPrpos {
  children: ReactNode;
}

const Layout: FC<LayoutPrpos> = ({ children }) => {
  return (
    <div>
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
      <NavBar />
      <Box p="70px 20px">{children}</Box>
    </div>
  );
};

export default Layout;
