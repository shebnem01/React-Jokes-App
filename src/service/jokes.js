import { instanceAxios } from "shared/helper/instanceAxios";
export const getJokes = (params) => {
  return instanceAxios({
    method: "GET",
    url: "search",
    params:{limit:12,page:1},
  });
 
};
