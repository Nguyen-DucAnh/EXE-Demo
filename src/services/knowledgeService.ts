import knowledgeData from '@/data/knowledge.json';
import type { KnowledgeArticle, LifeStage } from '@/types';

export const getKnowledgeArticles = (): KnowledgeArticle[] => {
  return knowledgeData as KnowledgeArticle[];
};

export const getArticlesByStage = (stage: LifeStage): KnowledgeArticle[] => {
  return knowledgeData.filter(article => article.stage === stage) as KnowledgeArticle[];
};

export const searchArticles = (query: string, stage?: LifeStage): KnowledgeArticle[] => {
  const lowerQuery = query.toLowerCase();
  let results = knowledgeData as KnowledgeArticle[];

  if (stage) {
    results = results.filter(article => article.stage === stage);
  }

  return results.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.content.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getArticleById = (id: string): KnowledgeArticle | undefined => {
  return (knowledgeData as KnowledgeArticle[]).find(article => article.id === id);
};

export const getStageLabel = (stage: LifeStage): string => {
  const labels: Record<LifeStage, string> = {
    preparing: 'Chuẩn bị mang thai',
    trimester1: 'Tam cá nguyệt đầu tiên',
    trimester2: 'Tam cá nguyệt thứ hai',
    trimester3: 'Tam cá nguyệt thứ ba',
    postpartum: 'Chăm sóc sau sinh',
    newborn: 'Chăm sóc trẻ sơ sinh',
  };
  return labels[stage];
};

