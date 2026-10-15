import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Fab, Zoom, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Header } from './components/Header';
import { NewsPage } from './pages/NewsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { useScrollToTop } from './stores/useScrollToTop';

export const App: React.FC = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const { isVisible, scrollToTop } = useScrollToTop(300);

  return (
    <Router>
      <Box ref={topRef} />
      <Header />
      <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Container>

      {/* Scroll to Top Button */}
      <Zoom in={isVisible}>
        <Fab
          color="primary"
          size="medium"
          onClick={() => scrollToTop(topRef)}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
          }}
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Router>
  );
};

export default App;