import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "react-query";

import { Header } from "components/Header";
import { HomeContextProvider } from "contexts/HomeContext";
import { Routes } from "routes";
import { queryClient } from "services/queryClients";

import "./app.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContextProvider>
        <Router>
          <Header />
          <Routes />
        </Router>
      </HomeContextProvider>
    </QueryClientProvider>
  );
}

export default App;
