import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./slice/usersSlice";

export const store = configureStore({
    reducer: {
        users: userReducers,
    },
});

export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";
