import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { userReducers } from "./slice/usersSlice";
import { albumApi } from "./apis/albumsApi";

export const store = configureStore({
    reducer: {
        users: userReducers,
        [albumApi.reducerPath]: albumApi.reducer,
        // albums: albumApi.reducer,
    },

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(albumApi.middleware);
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
