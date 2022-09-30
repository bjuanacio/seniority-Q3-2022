import { Provider } from 'react-redux'
import counterReducer from './slice/slider.slice'
import playerReducer from './slice/player.slice'
import { configureStore } from '@reduxjs/toolkit'
import { PlayerApi } from '../../../services/api/player.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    player: playerReducer,
    [PlayerApi.reducerPath]: PlayerApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(PlayerApi.middleware)
})

setupListeners(store.dispatch)

export function StoreProvider({ children }: any) {
  return <Provider store={store}>{children}</Provider>
}
