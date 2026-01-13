import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { KnowledgeArticle, LifeStage } from '@/types';
import { getKnowledgeArticles, getArticlesByStage, searchArticles } from '@/services/knowledgeService';

interface KnowledgeState {
  articles: KnowledgeArticle[];
  filteredArticles: KnowledgeArticle[];
  selectedStage: LifeStage | null;
  searchQuery: string;
  loading: boolean;
  error: string | null;
}

const initialState: KnowledgeState = {
  articles: [],
  filteredArticles: [],
  selectedStage: null,
  searchQuery: '',
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk(
  'knowledge/fetchArticles',
  async () => {
    return getKnowledgeArticles();
  }
);

export const fetchArticlesByStage = createAsyncThunk(
  'knowledge/fetchArticlesByStage',
  async (stage: LifeStage) => {
    return getArticlesByStage(stage);
  }
);

export const searchArticlesAsync = createAsyncThunk(
  'knowledge/searchArticles',
  async ({ query, stage }: { query: string; stage?: LifeStage }) => {
    return searchArticles(query, stage);
  }
);

const knowledgeSlice = createSlice({
  name: 'knowledge',
  initialState,
  reducers: {
    setSelectedStage: (state, action: PayloadAction<LifeStage | null>) => {
      state.selectedStage = action.payload;
      if (action.payload) {
        state.filteredArticles = state.articles.filter(
          article => article.stage === action.payload
        );
      } else {
        state.filteredArticles = state.articles;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearFilters: (state) => {
      state.selectedStage = null;
      state.searchQuery = '';
      state.filteredArticles = state.articles;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
        state.filteredArticles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch articles';
      })
      .addCase(fetchArticlesByStage.fulfilled, (state, action) => {
        state.filteredArticles = action.payload;
      })
      .addCase(searchArticlesAsync.fulfilled, (state, action) => {
        state.filteredArticles = action.payload;
      });
  },
});

export const { setSelectedStage, setSearchQuery, clearFilters } = knowledgeSlice.actions;
export default knowledgeSlice.reducer;

