import { useEffect, useState, useCallback } from "react";

const sendHttp = async (url, config) => {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Something went wrong");
  }

  return resData;
};

const useHttp = (url, config, initalData) => {
  const [datas, setDatas] = useState(initalData);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

    const clearData = () =>{
        setDatas(initalData)
    }
  const sendRequest = useCallback(
    async (data) => {
      setIsLoading(true);
      try {
        const resData = await sendHttp(url, { ...config, body: data });
        setDatas(resData);
      } catch (error) {
        setError(error.message || "Something Went Wrong! ");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);
  return {
    datas,
    isloading,
    error,
    sendRequest,
    clearData
  };
};

export default useHttp;
