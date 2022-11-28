import axios from "axios";
import React, { useState } from "react";
import useAlert from "./useAlert";

const useAsyncGet = (url: string, errorMessage: string) => {
  const [data, setAsyncData] = useState<any>();
  const [setAlert] = useAlert();

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setAsyncData(data);
    } catch {
      setAlert("error", errorMessage);
    }
  };

  return [data, getData] as const;
};

export default useAsyncGet;
