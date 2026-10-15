export interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface NewsAPIResponse {
  totalArticles: number;
  articles: NewsArticle[];
}

export type CategoryType = 
  | 'general' 
  | 'business' 
  | 'technology' 
  | 'sports' 
  | 'science' 
  | 'health' 
  | 'entertainment';

export type ArticleCountType = 1 | 2 | 5 | 10;