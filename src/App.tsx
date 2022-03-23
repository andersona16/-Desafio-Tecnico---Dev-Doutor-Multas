import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}
