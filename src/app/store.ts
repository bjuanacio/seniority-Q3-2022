import { configureStore } from '@reduxjs/toolkit'

import playerReducer from '../features/player/playerSlice'
import formReducer from '../features/player/formSlice'

export const store = configureStore({
  reducer: {
    players: playerReducer,
    form: formReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
