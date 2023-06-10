"use client"

import Image from "next/image";
import { MouseEventHandler } from "react";

// types
export interface CustomButtonPropsInterface {
    title: string;
    btnType?: "button" | "submit" | "reset";
    disabled?: boolean;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title, btnType = "button", disabled = false, containerStyles, handleClick}: CustomButtonPropsInterface) => {
    // states
    return (
        <button
            type={btnType}
            disabled={disabled}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
};

export default CustomButton;