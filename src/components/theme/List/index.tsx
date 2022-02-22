import { useState, Fragment, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import Item from "components/theme/Item";
import { Wrap } from "./styled";
import {
  postThemeInitLoader,
  useGetThemeList,
  usePostThemeInitLoader,
} from "actions/theme";

import { themeState } from "../../../../states";
import { ITheme } from "interface/theme";
import axios from "axios";

const Index = () => {
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(1);

  const { data, loading } = useGetThemeList(null, limit, page);

  // console.log(sa);
  // const [theme, setTheme] = useRecoilState<ITheme[]>(themeState);

  // useEffect(() => {
  //   setTheme(data);
  // }, [data]);

  return (
    <Wrap>
      {/* <div className="grid">
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
              <span>No Data</span>
            )}
          </>
        )}
      </div> */}
    </Wrap>
  );
};

export default Index;
