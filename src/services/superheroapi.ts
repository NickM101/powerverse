import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {API_URL} from '@env';
import SuperheroResponse, {
  Appearance,
  Biography,
  Connections,
  Image,
  Powerstats,
  Work,
} from '../types/superheroTypes';

export const superheroApi = createApi({
  reducerPath: 'superheroApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  refetchOnReconnect: true,
  endpoints: build => ({
    getCharactersByID: build.query<Array<SuperheroResponse>, Array<number>>({
      async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
        let characters: Array<SuperheroResponse> = [];
        await Promise.all(
          ids.map(async id => {
            const result = await fetchWithBQ(`${id}/image`);
            return characters.push(result.data as SuperheroResponse);
          }),
        );

        return characters.length
          ? {data: characters}
          : {
              data: [],
              error: {
                status: 500,
                statusText: 'Internal Server Error',
                data: 'Character Not Found',
              } as FetchBaseQueryError,
            };
      },
    }),
    getCharacter: build.query<Array<SuperheroResponse>, number>({
      query: id => `${id}`,
    }),
    getPowerstats: build.query<Array<Powerstats>, number>({
      query: id => `${id}/powerstats`,
    }),
    getBiography: build.query<Array<Biography>, number>({
      query: id => `${id}/biography`,
    }),
    getAppearance: build.query<Array<Appearance>, number>({
      query: id => `${id}/appearance`,
    }),
    getWork: build.query<Array<Work>, number>({
      query: id => `${id}/work`,
    }),
    getConnections: build.query<Array<Connections>, number>({
      query: id => `${id}/connections`,
    }),
    getImage: build.query<Array<Image>, number>({
      query: id => `${id}/image`,
    }),
    getSearchName: build.query<Array<SuperheroResponse>, string>({
      query: name => `/search/${name}`,
    }),
  }),
});

export const {useGetCharactersByIDQuery, useGetCharacterQuery} = superheroApi;
