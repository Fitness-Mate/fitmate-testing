import { React } from "react";
import { LoginContextProvider } from "./Contexts/Login";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Navigator from "./routes/Navigator";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RecoilRoot>
          <LoginContextProvider>
            <Navigator />
          </LoginContextProvider>
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
}

export default App;
