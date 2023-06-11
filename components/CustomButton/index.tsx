"use client"

// components
import Image from "next/image";

// interfaces
import { MouseEventHandler } from "react";
export interface CustomButtonPropsInterface {
    title: string;
    btnType?: "button" | "submit" | "reset";
    disabled?: boolean;
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title, btnType = "button", disabled = false, containerStyles = "", textStyles = "", rightIcon = "", isDisabled = false, handleClick}: CustomButtonPropsInterface) => {
    // states
    return (
        <button
            type={btnType}
            disabled={disabled}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
            aria-disabled={isDisabled}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="right icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
};

export default CustomButton;