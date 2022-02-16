import { FC } from "react";
import { Wrap } from "./styled";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAltSmall,
  VscExtensions,
  VscSettingsGear,
} from "react-icons/vsc";
import { IoGitMergeOutline } from "react-icons/io5";
import TextSvg from "./TextSvg";
import { ITheme } from "interface/theme";

interface ItemProps {
  item: ITheme;
  sec: number;
}

const Index: FC<ItemProps> = ({ item, sec = 300 }) => {
  return (
    <Wrap className="feed" sec={sec} itemColor={item.colors}>
      <header>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <h3>{item.title}</h3>
      </header>
      <article>
        <section className="left-bar">
          <div>
            <VscFiles />
            <VscSearch />
            <VscSourceControl />
            <VscDebugAltSmall />
            <VscExtensions />
            <IoGitMergeOutline />
          </div>
          <div>
            <VscSettingsGear />
          </div>
        </section>

        <section className="main">
          <header>
            <span>index.html</span>
            <span>style.css</span>
            <span>index.ts</span>
          </header>

          <TextSvg />
        </section>
      </article>
    </Wrap>
  );
};

export default Index;
