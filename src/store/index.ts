import { configureStore } from '@reduxjs/toolkit';
import knowledgeReducer from './slices/knowledgeSlice';
import aiReducer from './slices/aiSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    knowledge: knowledgeReducer,
    ai: aiReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

