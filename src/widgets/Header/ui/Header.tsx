import styles from "@/widgets/Header/ui/Header.module.scss"
import LogoIcon from "@/shared/assets/icons/Logo.svg?react"
import {AppIcon, Button, Input} from "@/shared/ui";
import MapPin from "@/shared/assets/icons/MapPin.svg?react"
import SearchIcon from "@/shared/assets/icons/Search.svg?react"
import UsersIcon from "@/shared/assets/icons/Users.svg?react"
import CircleIcon from "@/shared/assets/icons/Circle.svg?react"
import EnglishIcon from "@/shared/assets/icons/English.svg?react"
import BanglaIcon from "@/shared/assets/icons/Bangla.svg?react"
import {useTranslation} from "react-i18next";
import {useTheme} from "@/shared/config";

export const Header = () => {

    const {i18n} = useTranslation();

    const {toggleTheme} = useTheme();

    const handleToggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en');
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
                    placeholder={'Search by'}
                    Icon={
                        <AppIcon Icon={SearchIcon} size={18} variant="background"/>
                    }
                />
            </div>
            <div className={styles.section}>
                <Button variant="secondary">
                    Cart
                </Button>
                <Button variant="outline">
                    <AppIcon Icon={UsersIcon}/>
                    <span>Login</span>
                </Button>
                <Button onClick={toggleTheme} variant="ghost">
                    <AppIcon Icon={CircleIcon} filled/>
                </Button>
                <Button onClick={handleToggleLanguage} variant="ghost">
                    {
                        i18n.language === 'en' ? (
                            <AppIcon Icon={EnglishIcon}/>
                        ) : (
                            <AppIcon Icon={BanglaIcon}/>
                        )
                    }
                </Button>
            </div>
        </header>
    );
}