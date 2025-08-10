import axios from "axios";

const TIMEOUT = 10000; // 10 seconds
const CHARACTERS_LIMIT = 10;

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: TIMEOUT,
  params: {
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY!,
    limit: CHARACTERS_LIMIT,
  },
});
