import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';

export const Header: React.FC = () => {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
          >
            news app
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                borderBottom: location.pathname === '/' ? '2px solid white' : 'none',
                borderRadius: 0,
              }}
            >
              {language === 'de' ? 'Nachrichten' : 'NEWS'}
            </Button>

            <Button
              component={Link}
              to="/categories"
              color="inherit"
              sx={{
                borderBottom: location.pathname === '/categories' ? '2px solid white' : 'none',
                borderRadius: 0,
              }}
            >
              {language === 'de' ? 'Kategorien' : 'CATEGORIES'}
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              size="small"
              onClick={toggleLanguage}
              sx={{ ml: 1 }}
            >
              {language === 'de' ? 'Switch to English' : 'Zu Deutsch wechseln'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};