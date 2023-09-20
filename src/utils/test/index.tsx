import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { dark } from '../../styles/theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={dark()}> {children}</ThemeProvider>);
