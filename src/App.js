import { Header } from "./components/Header";
import "./app.css";
import { Main } from "./components/Main";
import { Navigate } from "./components/Navigate";
import { Loader } from "./components/Loader";
import { PlayerContextProvider } from "./contexts/CharactersContext";

function App() {
  return (
    <PlayerContextProvider>
      <Header />
      <Main />
      <Navigate />
      <Loader />
    </PlayerContextProvider>
  );
}

export default App;
