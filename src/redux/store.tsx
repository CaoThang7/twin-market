import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import { combineReducers } from "redux"
import cartSlice from "./slices/cart"
import themeSlice from "./slices/theme"
import languageSlice from "./slices/language"
import AsyncStorage from '@react-native-async-storage/async-storage'

const reducers = combineReducers({
    theme: themeSlice,
    language: languageSlice,
    cart: cartSlice
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    cartList: ['cart']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
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