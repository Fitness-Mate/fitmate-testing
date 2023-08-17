import { React } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Navigator from "./routes/Navigator";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RecoilRoot>
          <Navigator />
        </RecoilRoot>
      </div>
    </ThemeProvider>
  );
}

export default App;
