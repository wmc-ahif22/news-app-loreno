
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import newsApi from '../api/newsApi';
import type {
  NewsArticle,
  CategoryType,
  ArticleCountType,
} from '../types/news';
import { useLanguageStore } from '../stores/useLanguageStore';

export const useNewsData = (
  category: CategoryType = 'general',
  max: ArticleCountType = 10,
) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { language } = useLanguageStore();

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await newsApi.get('/top-headlines', {
        params: {
          category,
          max,
          lang: language,
        },
      });

      setArticles(response.data.articles ?? []);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ??
            'Fehler beim Laden der Nachrichten',
        );
      } else {
        setError('Ein unerwarteter Fehler ist aufgetreten.');
      }
    } finally {
      setLoading(false);
    }
  }, [category, max, language]);

  useEffect(() => {
    void fetchNews();
  }, [fetchNews]);

  return {
    articles,
    loading,
    error,
    refetch: fetchNews,
  };
};
