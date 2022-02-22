import axios from "axios";
import { useApiHandler, useSwrHandler } from ".";

export const postThemeInitLoader = async () => {
  console.log(2);
  const config = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-baupq/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": `${process.env.NEXT_PUBLIC_MONGO_APIKEY}`,
    },
    data: {
      collection: "themes",
      database: "themeDB",
      dataSource: "Cluster0",
      sort: { createdAt: -1 },
      limit: 10,
    },
  } as any;

  console.log(1);
  const res = await axios(config);
  console.log(res);

  return res;
};

export const useGetThemeList = (last_id: string, limit = 20, page = 1) =>
  useSwrHandler(`/api/v1/theme?last_id=${last_id}&limit=${limit}&page=${page}`);

export const usePostThemeInitLoader = async () => {
  const config = {
    method: "post",
    url: "https://data.mongodb-api.com/app/data-baupq/endpoint/data/beta/action/find",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "Access-Control-Allow-Credentials": "true",
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

  return await axios(config)
    .then(function (response) {
      console.log(response.data.documents);
      return response.data.documents;
    })
    .catch(function (error) {
      console.log(error);
    });
};
