import { configureStore } from "@reduxjs/toolkit"
import themeSlice from "./slices/theme"

export default configureStore({
    reducer: {
        theme: themeSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
