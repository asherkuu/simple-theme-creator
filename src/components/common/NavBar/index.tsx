import { FC } from "react";
import Link from "next/link";

import { AiOutlineSearch } from "react-icons/ai";
import { Box } from "../Core";
import { PageNavigation, SearchBar } from "./styled";

import { convertHexToRGBA } from "lib/helper";
import { Theme } from "styles/Theme";

interface NavBarProps {
  themeMode: "dark" | "light";
  theme: Theme;
  onToggle: () => void;
}

const Index: FC<NavBarProps> = ({ themeMode, theme, onToggle }) => {
  return (
    <Box
      w="100%"
      ps="fixed"
      t="0"
      l="0"
      zi="99"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Box
        dp="flex"
        ai="center"
        jc="space-between"
        p="20px 20px"
        zi="99"
        g="10px"
        bg={convertHexToRGBA(theme.color_bg_main, 0.75)}
      >
        {/* logo */}
        {/* <Link href="/">
          <a>
            <span>VS-theme Creator</span>
          </a>
        </Link> */}
        {/* page navigation */}
        <PageNavigation dp="flex" fd="column" g="7px" fx="1">
          <Box dp="flex" fd="row" g="8px">
            <p>
              <Link href="/">
                <a>Pages</a>
              </Link>
            </p>
            <p>/</p>
            <p>
              <Link href="/">
                <a>Theme</a>
              </Link>
            </p>
          </Box>
          <p>Theme</p>
        </PageNavigation>
        {/* search bar */}
        <SearchBar dp="flex" ai="center" jc="space-between" w="300px">
          <AiOutlineSearch />
          <input type="text" placeholder="Search Themes" />
        </SearchBar>
        {/* create theme button */}
        <Box dp="flex" ai="center" jc="space-between" w="150px">
          <button type="button">Create Theme</button>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
