import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import languages from "./translations"

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: "v3",
        resources: languages,
        ns: ["common"],
        defaultNS: "common",
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n