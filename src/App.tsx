import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { PlayerContextProvider } from "./contexts/CharactersContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes";
import "./app.css";

function App() {
  return (
    <PlayerContextProvider>
      <Router>
        <Header />
        <Routes />
        <Loader />
      </Router>
    </PlayerContextProvider>
  );
}

export default App;
