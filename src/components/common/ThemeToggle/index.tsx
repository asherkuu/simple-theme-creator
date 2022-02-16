import { FC } from "react";
import { Wrap } from "./styled";
import { MdNightlightRound, MdWbSunny } from "react-icons/md";

interface ToggleThemeProps {
  themeMode: "dark" | "light";
  onToggle: () => void;
}

const Index: FC<ToggleThemeProps> = ({ themeMode, onToggle }) => {
  return (
    <Wrap onClick={onToggle} mode={themeMode}>
      {themeMode !== "dark" ? <MdNightlightRound /> : <MdWbSunny />}
    </Wrap>
  );
};

export default Index;
