import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {FetchBaseQueryError} from '@reduxjs/toolkit/query';

import {API_URL} from '@env';
import SuperheroResponse from '../types/superheroTypes';

export const superheroApi = createApi({
  reducerPath: 'superheroApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  refetchOnReconnect: true,
  endpoints: build => ({
    getCharacters: build.query<SuperheroResponse, Array<number>>({
      async queryFn(ids, _queryApi, _extraOptions, fetchWithBQ) {
        let characters: any[] = [];
        await Promise.all(
          ids.map(async id => {
            const result = await fetchWithBQ(`${id}`);
            return characters.push(result.data);
          }),
        );

        return characters.length > 0
          ? {data: characters}
          : {
              error: {
                status: 500,
                statusText: 'Internal Server Error',
                data: 'Character Not Found',
              } as FetchBaseQueryError,
            };
      },
    }),
  }),
});

export const {useGetCharactersQuery} = superheroApi;
