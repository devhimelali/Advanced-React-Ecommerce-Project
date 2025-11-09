import styles from "@/widgets/PageLoader/ui/PageLoader.module.scss"
import {useTranslation} from "react-i18next";
import {Spinner} from "@/shared/ui";

export const PageLoader = () => {
    const {t} = useTranslation()
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>
                {t('pageLoader.loading')}
            </h3>
            <Spinner/>
        </div>
    )
}