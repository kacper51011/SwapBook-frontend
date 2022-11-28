import axios from "axios";
import { useState } from "react";
import useAlert from "./useAlert";

// Hook that return getData (async function which set the data, both depends on passed url to hooks) and the data itself
//  It is also needed to pass the error message (will be shown when the error occur)

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
