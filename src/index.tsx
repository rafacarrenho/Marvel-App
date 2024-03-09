import { createRoot } from "react-dom/client";
import App from "./App";

const documentRoot = document.getElementById("root");
const root = createRoot(documentRoot!);
root.render(<App />);
