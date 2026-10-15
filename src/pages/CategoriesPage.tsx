import React, { useState } from 'react';
import { Typography, Box, CircularProgress, Alert } from '@mui/material';
import { CategorieCard } from '../components/CategorieCard';
import { NewsCard } from '../components/NewsCard';
import { useNewsData } from '../stores/useNewsData';
import type { CategoryType, ArticleCountType } from '../types/news';

export const CategoriesPage: React.FC = () => {
  const [category, setCategory] = useState<CategoryType>('sports');
  const [count, setCount] = useState<ArticleCountType>(10);

  const { articles, loading, error } = useNewsData(category, count);

  return (
    <Box>
      <CategorieCard
        selectedCategory={category}
        onCategoryChange={setCategory}
        selectedCount={count}
        onCountChange={setCount}
      />

      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
        Anzahl Artikel: {articles.length}
      </Typography>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      {!loading &&
        !error &&
        articles.map((article, index) => (
          <NewsCard
            key={`${article.url}-${index}`}
            article={article}
            categoryName={category}
          />
        ))}
    </Box>
  );
};