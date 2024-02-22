import { useEffect, useState } from "react";

export const useApi = (url: string, field: string) => {
  const [info, setInfo] = useState<string>("");
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((info) => {
        setInfo(info[`${field}`]);
      });
  }, [field, url]); //!Actualizacion

  return [info];
};
