import { useLayoutEffect, useState } from "react";

import NavbarComponent from "./components/Header/index.tsx";
import { VideosProvider } from "./contexts/VideosContext/index.tsx";
import { FilterProvider } from "./contexts/FilterContext/index.tsx";
import Router from "./routes/Router";

import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { GlobalStyle } from "./theme/global";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    const headerElement = document.getElementById("header");

    if (headerElement) setHeaderHeight(headerElement.offsetHeight);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <VideosProvider>
          <NavbarComponent />
          <Wrapper marginTop={headerHeight}>
            <Router />
          </Wrapper>
          <GlobalStyle />
        </VideosProvider>
      </FilterProvider>
    </ThemeProvider>
  );
};

const Wrapper = styled.div<{ marginTop: number | null }>`
  margin-top: calc(${({ marginTop = 0 }) => marginTop}px + 16px);
`;

export default App;
