import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://api-exercise-q3.herokuapp.com/'

export const PlayerApi = createApi({
  reducerPath: 'playerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      headers.set('author', '36')
      return headers
    }
  }),
  endpoints: (builder) => ({
    getPlayer: builder.query({
      query: (type: string) => '/player/' + type
    })
  })
})

export const { useGetPlayerQuery } = PlayerApi
