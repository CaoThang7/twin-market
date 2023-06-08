import { createSlice } from "@reduxjs/toolkit"

interface DarkMode {
    mode: boolean
}

const initialState: DarkMode = {
    mode: false
}

export const themeSlice = createSlice({
    name: "theme",
    initialState, // gia tri ban dau
    reducers: {
        toggleDarkMode: (state) => {
            state.mode = !state.mode
        }
    },
})

export const { toggleDarkMode } = themeSlice.actions

export default themeSlice.reducer