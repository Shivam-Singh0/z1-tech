import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" });

export const MoviesAPI = createApi({
    baseQuery,
    reducerPath: "MoviesAPI",
    endpoints: (builder) => ({
        searchMovies: builder.mutation({
            query: ({ query }) => `?s=${query}&plot=full&apikey=581b5485`,
            method: "GET",
        }),
    }),
});

export const { useSearchMoviesMutation } = MoviesAPI;
