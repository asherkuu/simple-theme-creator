import { FC } from "react";
import Link from "next/link";

import { HiOutlinePlus } from "react-icons/hi";
import { Box } from "../Core";
import ThemeToggle from "components/common/ThemeToggle";
import { MenuItem, NewButton } from "./styled";

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
        bg={convertHexToRGBA(theme.color_bg_main, 0.75)}
      >
        <Link href="/">
          <a>
            <span>VS-theme Creator</span>
          </a>
        </Link>
        {/* <Box dp="flex" ai="center" jc="space-between">
          <input type="text" />
        </Box> */}
        <Box dp="flex" ai="center" fd="row" g="10">
          <MenuItem>ALL</MenuItem>
          <MenuItem>DARK</MenuItem>
          <MenuItem>LIGHT</MenuItem>
          <MenuItem>COLOR</MenuItem>
          <ThemeToggle themeMode={themeMode} onToggle={onToggle} />

          <Link href="/new-theme">
            <NewButton>
              <HiOutlinePlus />
            </NewButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
