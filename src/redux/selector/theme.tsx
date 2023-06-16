import { RootState } from "@redux/store"

export const selectValueTheme = (state: RootState) => state.theme.mode
