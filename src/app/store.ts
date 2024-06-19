import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import contentReducer from '../components/content/contentSlice';

// создаем store и указываем наши редьюсеры из слайсов
export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

// это типы дла ts
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
