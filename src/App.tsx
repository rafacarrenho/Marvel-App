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
      <Router>
        <HomeContextProvider>
          <Header />
          <Routes />
        </HomeContextProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
