import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../4_features/auth/model/authSlice';
import notesReducer from '../../5_entities/note/model/noteSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
