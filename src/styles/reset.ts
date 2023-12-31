import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;900&display=swap');
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

img {
  max-width: 100%;
  margin: 0;
  display: block;
}


  html,
  body {
    animation: fadeIn 0.7s both;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
