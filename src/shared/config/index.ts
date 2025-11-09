import {AppRoutes, routePaths} from "@/shared/config/router/routerPaths.ts";
import {
    Theme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
    type ThemeType,
} from "@/shared/config/theme/ThemeContext.ts";

import {useTheme} from "@/shared/config/theme/useTheme.tsx";

import {languageIconList, type SupportedLngsType} from "@/shared/config/i18n/LanguageIconList.ts";

export {
    AppRoutes,
    routePaths,
    Theme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
    languageIconList,
    useTheme,
    type ThemeType,
    type SupportedLngsType,
};
