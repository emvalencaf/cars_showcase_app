"use client"

// components
import Image from "next/image";

// interfaces
import { MouseEventHandler } from "react";
export interface CustomButtonPropsInterface {
    title: string;
    btnType?: "button" | "submit" | "reset";
    containerStyles?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title, btnType = "button", containerStyles = "", textStyles = "", rightIcon = "", isDisabled = false, handleClick }: CustomButtonPropsInterface) => {
    // states
    return (
        <button
            type={btnType}
            disabled={isDisabled}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
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