"use client";

// components
import { CustomButton } from "..";
import { Dispatch, SetStateAction } from "react";

// interfaces
export interface ShowMoreButtonPropsInterface {
    pageNumber: number;
    isNext: boolean;
    setLimit: Dispatch<SetStateAction<number>>;
}

const ShowMoreButton = ({ pageNumber, isNext, setLimit }: ShowMoreButtonPropsInterface) => {
    // handle navigation
    const handleNavigation = () => {
        
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit);
    };

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMoreButton;