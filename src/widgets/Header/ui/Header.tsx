import styles from "@/widgets/Header/ui/Header.module.scss"
import LogoIcon from "@/shared/assets/icons/Logo.svg?react"
import {AppIcon, Button, Input} from "@/shared/ui";
import MapPin from "@/shared/assets/icons/MapPin.svg?react"
import SearchIcon from "@/shared/assets/icons/Search.svg?react"
import UsersIcon from "@/shared/assets/icons/Users.svg?react"
import {LanguageSwitcher, ThemeSwitcher} from "@/widgets/Header";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router";
import {routePaths} from "@/shared/config";

export const Header = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate(routePaths.login);
    }
    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <LogoIcon className={styles.logo}/>
                <Button variant="ghost">
                    <AppIcon Icon={MapPin}/>
                    <span>10115 New York</span>
                </Button>
            </div>
            <div className={styles.section}>
                <Input
                    rounded
                    placeholder={t('header.searchBy')}
                    Icon={
                        <AppIcon Icon={SearchIcon} size={18} variant="background"/>
                    }
                />
            </div>
            <div className={styles.section}>
                <Button variant="secondary">
                    {t('header.cart')}
                </Button>
                <Button onClick={handleLoginClick} variant="outline">
                    <AppIcon Icon={UsersIcon}/>
                    <span>{t('header.login')}</span>
                </Button>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </header>
    );
}