import { createSlice } from "@reduxjs/toolkit"
import i18n from "i18next"

interface Translation {
    locale: string
}

const initialState: Translation = {
    locale: 'en'
}

export const languageSlice = createSlice({
    name: "language",
    initialState, // gia tri ban dau
    reducers: {
        changeLanguage: (state, action) => {
            state.locale = action.payload
            i18n.changeLanguage(state.locale)
        }
    },
})

export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer