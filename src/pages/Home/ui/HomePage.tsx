import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTheme } from "@/shared/config";
import { useTranslation } from "react-i18next";
import {Button, Input} from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/Search.svg?react"


const HomePage = () => {
    const { toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
    }

    return (
        <>
            <h1 className={styles.title}>{t("title")}</h1>
            <Input Icon={<SearchIcon/>} placeholder="Search...."/>
            <Button onClick={toggleTheme}>Toggle Theme</Button>
            <Button variant="outline" onClick={changeLanguage}>Change Language</Button>
            <Button variant="tertiary">Tertiary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button disabled variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Link to={"/login"}>Login Page</Link>
        </>
    );
}

export default HomePage;