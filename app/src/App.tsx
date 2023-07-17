import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./router";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      // primary: {
      // main: "#fff",
      // },
      // secondary: {
      // main: "#0ff",
      // },
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
