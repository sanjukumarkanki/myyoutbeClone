import axios from "axios";

const BASE_URL = " https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (params, optionalParam) => {
  const { data } = await axios.get(
    `${BASE_URL}/${optionalParam}?${params.toString()}`
  );
  return data;
};
