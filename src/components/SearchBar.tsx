import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLanguageStore } from '../stores/useLanguageStore';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const { language } = useLanguageStore();

  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder={language === 'de' ? 'Artikel suchen...' : 'Search articles...'}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      sx={{ mb: 2 }}
    />
  );
};