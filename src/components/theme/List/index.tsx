import { useState, Fragment, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import Item from "components/theme/Item";
import { Wrap } from "./styled";

import { getThemeSelector, themeState } from "../../../states/theme";
import { ITheme } from "interface/theme";

const Index = () => {
  const [limit, setLimit] = useState<number>(20);

  const { contents: themeList, state } = useRecoilValueLoadable<ITheme[]>(
    getThemeSelector({ limit: 1, lastId: "6211deae2ad674b8d3cb228d" })
  );

  return (
    <Wrap>
      <div className="grid">
        {state !== "hasValue" ? (
          <span>Loaidng...</span>
        ) : (
          <>
            {themeList && themeList.length > 0 ? (
              <>
                {themeList.map((item) => (
                  <Fragment key={item._id}>
                    <Item item={item} sec={100} />
                  </Fragment>
                ))}
              </>
            ) : (
              <span>No theme</span>
            )}
          </>
        )}
      </div>
    </Wrap>
  );
};

export default Index;
