import {Link} from "react-router";
import styles from "@/pages/Home/ui/HomePage.module.scss";
import {useTranslation} from "react-i18next";
import {Header} from "@/widgets/Header";
import {Footer} from "@/widgets/Footer";


const HomePage = () => {
    const {t} = useTranslation();

    return (
        <div className={styles.pageWrapper}>
            <Header/>
            <main className={styles.content}>
                <Link to={"/login"}>Login Page</Link>
            </main>
            <Footer/>
        </div>
    );
}

export default HomePage;