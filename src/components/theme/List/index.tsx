import { useState, Fragment, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import Item from "components/theme/Item";
import { Wrap } from "./styled";
import { usePostThemeList } from "actions/theme";

import { themeState } from "../../../../states";
import { ITheme } from "interface/theme";

const Index = () => {
  const [limit, setLimit] = useState<number>(20);

  const [postThemeList, { error }]: any = usePostThemeList();

  const [{ data, loading }, setTheme] =
    useRecoilState<{ data: ITheme[]; loading: boolean }>(themeState);

  useEffect(() => {
    getThemeList();
  }, []);

  const getThemeList = async () => {
    return setTheme({ ...(await postThemeList({ lastId: null, limit })) });
  };

  return (
    <Wrap>
      <div className="grid">
        {loading ? (
          <span>Loaidng...</span>
        ) : (
          <>
            {data && data.length > 0 ? (
              <>
                {data.map((item) => (
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
