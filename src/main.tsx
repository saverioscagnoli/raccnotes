import ReactDOM from "react-dom/client";
import { App } from "./App";
import { SettingsContextProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>
);
