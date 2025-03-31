import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { userReducers } from "./slice/usersSlice";
import { albumApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer: {
        users: userReducers,
        [albumApi.reducerPath]: albumApi.reducer,
        // albums: albumApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(albumApi.middleware)
            .concat(photosApi.middleware);
    },
});

setupListeners(store.dispatch);

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
export {
    useFetchAlbumsQuery,
    useCreateAlbumMutation,
    useDeleteAlbumMutation,
} from "./apis/albumsApi";

export {
    useAddPhotosMutation,
    useDeletePhotoMutation,
    useFetchPhotosQuery,
} from "./apis/photosApi";
