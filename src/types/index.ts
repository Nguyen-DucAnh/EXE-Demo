export type LifeStage = 
  | 'preparing' 
  | 'trimester1' 
  | 'trimester2' 
  | 'trimester3' 
  | 'postpartum' 
  | 'newborn';

export interface KnowledgeArticle {
  id: string;
  title: string;
  stage: LifeStage;
  content: string;
  tags: string[];
}

export interface AIQuestion {
  question: string;
  answer?: string;
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface OIDCConfig {
  authority: string;
  client_id: string;
  redirect_uri: string;
  response_type: string;
  scope: string;
}

