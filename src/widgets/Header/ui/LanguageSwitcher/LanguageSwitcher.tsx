import {AppIcon, Button} from "@/shared/ui";
import {useTranslation} from "react-i18next";
import type {SupportedLngsType} from "@/shared/config";
import {languageIconList} from "@/shared/config";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const currentLanguage = i18n.language as SupportedLngsType;

    const handleToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en');
    }
    return (
        <Button onClick={handleToggleLanguage} variant="ghost">
            <AppIcon Icon={languageIconList[currentLanguage]}/>
        </Button>
    );
}