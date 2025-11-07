import type {FunctionComponent, SVGProps} from "react";
import styles from "@/shared/ui/AppIcon/AppIcon.module.scss"
import {cn} from "@/shared/lib";

type AppIconVariant = "clean" | "background";

interface AppIconProps {
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    variant?: AppIconVariant;
    size?: number;
    className?: string;
    filled?: boolean;
}

export const AppIcon = (props: AppIconProps) => {
    const {Icon, className, variant = "clean", size = 24, filled = false} = props;

    const AppIcon = (
        <Icon
            width={size}
            height={size}
            className={cn(styles.icon, className, {
                [styles.filled]: filled,
            })}
        />
    );

    if (variant === "background") {
        return <div className={styles.wrapper}>{AppIcon}</div>;
    }
    return AppIcon;
}