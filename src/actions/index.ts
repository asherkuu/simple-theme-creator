import { useState } from "react";
import axios from "axios";
import useSWR from "swr";

export const fetcher = async (url) =>
  await axios.get(url).then(async (res) => {
    if (res.status !== 200) {
      return Promise.reject(res);
    } else {
      return res.data;
    }
  });

// get with useSWR
export const useSwrHandler = (url: string) => {
  const { data, error, ...rest } = useSWR(url, fetcher, {
    onErrorRetry: (error) => {
      if (error.status === 401) return false;
    },
  });

  return { data, error, loading: !error && !data, ...rest };
};

// axios post
export function useApiHandler(apiCall) {
  const [reqState, setReqState] = useState({
    error: null,
    data: null,
    loading: false,
  });

  const handler = async (...data) => {
    return new Promise(async (resolve, reject) => {
      setReqState({ error: null, data: null, loading: true });
      try {
        const json = await apiCall(...data);
        setReqState({
          error: json ? json.data : "error !",
          data: json ? json.data : null,
          loading: false,
        });

        resolve({
          error: json ? json.data : "error !",
          data: json ? json.data : null,
          loading: false,
        });
      } catch (e) {
        const message =
          (e.response && e.response.data) || "Ooops, something went wrong...";
        setReqState({ error: message, data: null, loading: false });
        reject(message);
      }
    });
  };

  return [handler, { ...reqState }];
}
