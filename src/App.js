import { Header } from "./components/Header";
import "./app.css";
import { Main } from "./components/Main";
import { Navigate } from "./components/Navigate";
import axios from "axios";
import md5 from "md5";

function App() {
  const fetchData = async () => {
    const timestamp = new Date().getTime().toString();
    const hash = md5(
      `${timestamp}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
    );

    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
      params: {
        apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
        ts: timestamp,
        hash: hash,
        limit: 10,
      },
    });
    console.log(res);
  };

  fetchData();
  return (
    <>
      <Header />
      <Main />
      <Navigate />
    </>
  );
}

export default App;
