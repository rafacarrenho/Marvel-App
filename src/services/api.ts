import axios from "axios";
import md5 from "md5";

const TIMEOUT = 10000; // 10 seconds
const CHARACTERS_LIMIT = 10;
const timestamp = new Date().getTime().toString();
const hash = md5(
  `${timestamp}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
);

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: TIMEOUT,
  params: {
    apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY!,
    ts: timestamp,
    hash: hash,
    limit: CHARACTERS_LIMIT,
  },
});
