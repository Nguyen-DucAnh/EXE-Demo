import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { AIQuestion } from '@/types';
import { aiApi } from '@/services/api';

interface AIState {
  questions: AIQuestion[];
  currentQuestion: string;
  loading: boolean;
  error: string | null;
}

const initialState: AIState = {
  questions: [],
  currentQuestion: '',
  loading: false,
  error: null,
};

// Load from localStorage
const loadQuestionsFromStorage = (): AIQuestion[] => {
  try {
    const stored = localStorage.getItem('ai_questions');
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save to localStorage
const saveQuestionsToStorage = (questions: AIQuestion[]) => {
  try {
    localStorage.setItem('ai_questions', JSON.stringify(questions));
  } catch (error) {
    console.error('Failed to save questions to localStorage:', error);
  }
};

const initialQuestions = loadQuestionsFromStorage();

const aiSlice = createSlice({
  name: 'ai',
  initialState: {
    ...initialState,
    questions: initialQuestions,
  },
  reducers: {
    setCurrentQuestion: (state, action: PayloadAction<string>) => {
      state.currentQuestion = action.payload;
    },
    clearCurrentQuestion: (state) => {
      state.currentQuestion = '';
    },
    clearQuestions: (state) => {
      state.questions = [];
      saveQuestionsToStorage([]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(askQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(askQuestion.fulfilled, (state, action) => {
        state.loading = false;
        const newQuestion: AIQuestion = {
          question: action.meta.arg,
          answer: action.payload,
          timestamp: Date.now(),
        };
        state.questions.unshift(newQuestion);
        saveQuestionsToStorage(state.questions);
        state.currentQuestion = '';
      })
      .addCase(askQuestion.rejected, (state, action) => {
        state.loading = false;
        // rejectWithValue puts the error in action.payload, not action.error
        state.error = (action.payload as string) || action.error?.message || 'Không thể kết nối đến server. Vui lòng kiểm tra backend đang chạy tại http://localhost:5000';
      });
  },
});

export const askQuestion = createAsyncThunk(
  'ai/askQuestion',
  async (question: string, { rejectWithValue }) => {
    try {
      const answer = await aiApi.ask(question);
      return answer;
    } catch (error: any) {
      console.error('Error asking question:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Không thể kết nối đến server. Vui lòng kiểm tra backend đang chạy.';
      return rejectWithValue(errorMessage);
    }
  }
);

export const { setCurrentQuestion, clearCurrentQuestion, clearQuestions } = aiSlice.actions;
export default aiSlice.reducer;

