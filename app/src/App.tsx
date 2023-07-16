import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
