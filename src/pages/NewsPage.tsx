import React, { useState, useMemo } from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import { useNewsData } from '../stores/useNewsData';
import { NewsCard } from '../components/NewsCard';
import { SearchBar } from '../components/SearchBar';
import { SourceFilter } from '../components/SourceFilter';
import { useLanguageStore } from '../stores/useLanguageStore';

export const NewsPage: React.FC = () => {
  const { articles, loading, error } = useNewsData('general', 10);
  const { language } = useLanguageStore();

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedSource, setSelectedSource] = useState<string>('');

  // Quellen aus den aktuellen Artikeln extrahieren
  const availableSources = useMemo(() => {
    const sources = articles.map((a) => a.source.name);
    return Array.from(new Set(sources));
  }, [articles]);

  // Gefilterte Artikel basierend auf Suche & Quellen-Filter
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSource =
        selectedSource === '' || article.source.name === selectedSource;

      return matchesSearch && matchesSource;
    });
  }, [articles, searchTerm, selectedSource]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Box>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {availableSources.length > 0 && (
        <SourceFilter
          sources={availableSources}
          selectedSource={selectedSource}
          onSelectSource={setSelectedSource}
        />
      )}

      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
        Article Count: {filteredArticles.length}
      </Typography>

      {filteredArticles.length === 0 ? (
        <Typography variant="body1">
          {language === 'de'
            ? 'Keine Artikel gefunden.'
            : 'No articles found.'}
        </Typography>
      ) : (
        filteredArticles.map((article, index) => (
          <NewsCard key={`${article.url}-${index}`} article={article} />
        ))
      )}
    </Box>
  );
};