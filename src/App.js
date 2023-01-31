//redux
import { Provider } from 'react-redux'
import store from './store';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  return (
    
    <Provider store={store}>
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
    </Provider>
    
  );
}
