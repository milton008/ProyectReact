import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { global } from '@enviopack/enviopack-ui';
import { createGlobalStyle } from 'styled-components';
import App from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const GlobalStyle = createGlobalStyle`
    :root {
      ${global.rootStyles}
    }
`;

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
