import { ThemeProvider } from '@emotion/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import createMuiTheme from './theme/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
function App() {
  const theme = createMuiTheme();
  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
