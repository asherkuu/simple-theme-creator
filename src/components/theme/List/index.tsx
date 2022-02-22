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
  // const sa = usePostThemeInitLoader();

  useEffect(() => {
    const d = async () => {
      const config = {
        method: "POST",
        url: "https://data.mongodb-api.com/app/data-baupq/endpoint/data/beta/action/find",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "*",
          "Access-Control-Allow-Headers": ["Content-Type"],
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
          "api-key": `${process.env.NEXT_PUBLIC_MONGO_APIKEY}`,
        },
        data: JSON.stringify({
          collection: "themes",
          database: "themeDB",
          dataSource: "Cluster0",
          sort: { createdAt: -1 },
          limit: 10,
        }),
      } as any;

      return await axios({ ...config })
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    d();
  }, []);
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
