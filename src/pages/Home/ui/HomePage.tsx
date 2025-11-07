import {Link} from "react-router";
import styles from "./HomePage.module.scss";
import {useTheme} from "@/shared/config";
import {useTranslation} from "react-i18next";
import {Button, Input} from "@/shared/ui";
import SearchIcon from "@/shared/assets/icons/Search.svg?react"
import {Header} from "@/widgets/Header";


const HomePage = () => {
    const {toggleTheme} = useTheme();
    const {t, i18n} = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "bn" : "en");
    }

    return (
        <>
            <Header/>
            <Link to={"/login"}>Login Page</Link>
        </>
    );
}

export default HomePage;