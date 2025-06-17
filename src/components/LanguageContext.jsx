// src/components/LanguageContext.jsx
import React, { createContext, useEffect, useState } from "react";
import i18n from "../i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(i18n.language || "en");

    useEffect(() => {
        const onLanguageChanged = (lng) => setLanguage(lng);
        i18n.on("languageChanged", onLanguageChanged);

        return () => {
            i18n.off("languageChanged", onLanguageChanged);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguage(lng);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
