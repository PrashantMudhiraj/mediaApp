import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumApi = createApi({
    reducerPath: "albums",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005",
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, user) => {
                    return [{ type: "Albums", id: user.id }];
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        params: {
                            userId: user.id,
                        },
                        method: "GET",
                    };
                },
            }),
            createAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: "Albums", id: user.id }];
                },
                query: (user) => {
                    return {
                        url: "/albums",
                        method: "POST",
                        body: {
                            title: faker.commerce.productName(),
                            userId: user.id,
                        },
                    };
                },
            }),
            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: "Albums", id: album.userId }];
                },
                query: (album) => {
                    return {
                        url: `albums/${album.id}`,
                        method: "DELETE",
                    };
                },
            }),
        };
    },
});

export const {
    useFetchAlbumsQuery,
    useCreateAlbumMutation,
    useDeleteAlbumMutation,
} = albumApi;
export { albumApi };
