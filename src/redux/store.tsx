import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/theme"
import languageSlice from "./slices/language"

export default configureStore({
    reducer: {
        theme: themeSlice,
        language: languageSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
