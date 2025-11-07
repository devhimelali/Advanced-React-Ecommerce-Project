import type {ChangeEvent, InputHTMLAttributes, ReactNode} from "react";
import {cn} from "@/shared/lib";
import styles from "./Input.module.scss";
import {useState} from "react";
import {Button} from "@/shared/ui";
import HideIcon from '@/shared/assets/icons/Show.svg?react'
import ShowIcon from '@/shared/assets/icons/Show.svg?react'

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputType {
    className?: string;
    value?: string;
    disabled?: boolean;
    rounded?: boolean;
    Icon?: ReactNode;
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focused, setFocused] = useState<boolean>(false);

    const {
        className,
        value,
        disabled = false,
        rounded = false,
        Icon,
        onChange,
        type = 'text',
        ...rest
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    }

    const handleFocus = () => {
        setFocused(true);
    }

    const handleBlur = () => {
        setFocused(false);
    }

    return (
        <div className={cn(
            styles.inputContainer,
            className, {
                [styles.rounded]: rounded,
                [styles.disabled]: disabled
            }
        )}>
            {Icon}
            <input
                value={value}
                type={showPassword && type === 'password' ? 'text' : 'password'}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                className={cn(
                    styles.input, {
                        [styles.disabled]: disabled
                    }
                )}
                {...rest}
            />
            {
                type === "password" && (
                    <Button
                        variant="ghost"
                        type="button"
                        className={cn(styles.toggleVisibility)}
                        onClick={toggleShowPassword}
                    >
                        {
                            showPassword ? <HideIcon/> : <ShowIcon/>
                        }
                    </Button>
                )
            }
        </div>
    );
}