import { StrictMode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { AppRoutes } from './routes';
import { ResetCss } from './styles/reset';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/theme';
import { Loading } from './components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ResetCss />
      <RecoilRoot>
        <Suspense fallback={<Loading isLoading />}>
          <ThemeProvider theme={dark()}>
            <AppRoutes />
          </ThemeProvider>
        </Suspense>
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>,
);
