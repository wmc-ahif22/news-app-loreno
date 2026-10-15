import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link, Box } from '@mui/material';
import type { NewsArticle } from '../types/news';

interface NewsCardProps {
  article: NewsArticle;
  categoryName?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, categoryName }) => {
  const formattedDate = new Date(article.publishedAt).toLocaleDateString();

  return (
    <Card sx={{ mb: 3, boxShadow: 2 }}>
      {article.image && (
        <CardMedia
          component="img"
          height="220"
          image={article.image}
          alt={article.title}
        />
      )}
      <CardContent>
        {categoryName && (
          <Typography variant="subtitle2" color="secondary" gutterBottom>
            Kategorie: {categoryName}
          </Typography>
        )}

        <Typography variant="h5" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
          {article.title}
        </Typography>

        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
          {article.source.name} - {formattedDate}
        </Typography>

        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          {article.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {article.content}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Typography variant="body2">
            Url:{' '}
            <Link href={article.url} target="_blank" rel="noopener noreferrer" underline="hover">
              {article.url}
            </Link>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};