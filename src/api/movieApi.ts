import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../utils/constants";
import { IMovie, MoviesApiResponse } from "../utils/types";

const API_KEY = import.meta.env.VITE_TOKEN_API;

interface ParamsType {
  page?: number;
  limit?: number;
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Movies", "MoviesSearch"],

  endpoints: (builder) => ({
    getMovies: builder.query<MoviesApiResponse, ParamsType>({
      providesTags: ["Movies"],
      query: (params) => {
        const { page = 1 } = params || {};
        return {
          url: "/v1.4/movie",
          params: {
            page,
          },
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
    getMovieByID: builder.query<IMovie, number>({
      query: (id) => {
        return {
          url: `/v1.4/movie/${id}`,
          headers: {
            "X-API-KEY": API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIDQuery } = moviesApi;
