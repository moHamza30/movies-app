import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WatchlistContext from "./context/WatchlistContext.jsx"

createRoot(document.getElementById("root")).render(
  <WatchlistContext>
    <StrictMode>
      <App />
    </StrictMode>
  </WatchlistContext>
);
