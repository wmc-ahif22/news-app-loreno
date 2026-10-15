import React from 'react';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';
import type { CategoryType, ArticleCountType } from '../types/news';
import { useLanguageStore } from '../stores/useLanguageStore';

interface CategorieCardProps {
  selectedCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
  selectedCount: ArticleCountType;
  onCountChange: (count: ArticleCountType) => void;
}

export const CategorieCard: React.FC<CategorieCardProps> = ({
  selectedCategory,
  onCategoryChange,
  selectedCount,
  onCountChange,
}) => {
  const { language } = useLanguageStore();

  const categories: { key: CategoryType; labelDe: string; labelEn: string }[] = [
    { key: 'general', labelDe: 'Allgemein', labelEn: 'General' },
    { key: 'business', labelDe: 'Wirtschaft', labelEn: 'Business' },
    { key: 'sports', labelDe: 'Sport', labelEn: 'Sports' },
    { key: 'technology', labelDe: 'Technologie', labelEn: 'Technology' },
    { key: 'science', labelDe: 'Wissenschaft', labelEn: 'Science' },
    { key: 'health', labelDe: 'Gesundheit', labelEn: 'Health' },
    { key: 'entertainment', labelDe: 'Unterhaltung', labelEn: 'Entertainment' },
  ];

  const counts: ArticleCountType[] = [1, 2, 5, 10];

  return (
    <Card sx={{ mb: 4, p: 1, backgroundColor: '#f9f9f9' }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {language === 'de' ? 'Kategorie & Anzahl wählen' : 'Select Category & Count'}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 200 }} size="small">
            <InputLabel id="category-select-label">
              {language === 'de' ? 'Kategorie' : 'Category'}
            </InputLabel>
            <Select
              labelId="category-select-label"
              value={selectedCategory}
              label={language === 'de' ? 'Kategorie' : 'Category'}
              onChange={(e) => onCategoryChange(e.target.value as CategoryType)}
            >
              {categories.map((cat) => (
                <MenuItem key={cat.key} value={cat.key}>
                  {language === 'de' ? cat.labelDe : cat.labelEn}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel id="count-select-label">
              {language === 'de' ? 'Anzahl' : 'Count'}
            </InputLabel>
            <Select
              labelId="count-select-label"
              value={selectedCount}
              label={language === 'de' ? 'Anzahl' : 'Count'}
              onChange={(e) => onCountChange(Number(e.target.value) as ArticleCountType)}
            >
              {counts.map((cnt) => (
                <MenuItem key={cnt} value={cnt}>
                  {cnt}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  );
};