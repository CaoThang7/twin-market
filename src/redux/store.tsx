import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/theme"
import languageSlice from "./slices/language"

const store = configureStore({
    reducer: {
        theme: themeSlice,
        language: languageSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store