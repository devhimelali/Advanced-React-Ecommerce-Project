import {AppIcon, Button} from "@/shared/ui";
import {useTheme} from "@/shared/config";
import CircleIcon from "@/shared/assets/icons/Circle.svg?react"

export const ThemeSwitcher = () => {
    const {toggleTheme} = useTheme();

    return (
        <Button onClick={toggleTheme} variant="ghost">
            <AppIcon Icon={CircleIcon} filled/>
        </Button>
    )
}