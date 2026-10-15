import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { useLanguageStore } from '../stores/useLanguageStore';

interface SourceFilterProps {
  sources: string[];
  selectedSource: string;
  onSelectSource: (source: string) => void;
}

export const SourceFilter: React.FC<SourceFilterProps> = ({
  sources,
  selectedSource,
  onSelectSource,
}) => {
  const { language } = useLanguageStore();

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {language === 'de' ? 'Nach Quelle filtern:' : 'Filter by Source:'}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        <Chip
          label={language === 'de' ? 'Alle' : 'All'}
          clickable
          color={selectedSource === '' ? 'primary' : 'default'}
          onClick={() => onSelectSource('')}
        />
        {sources.map((source) => (
          <Chip
            key={source}
            label={source}
            clickable
            color={selectedSource === source ? 'primary' : 'default'}
            onClick={() => onSelectSource(source)}
          />
        ))}
      </Box>
    </Box>
  );
};