"use client";

// hooks
import { useRouter } from "next/navigation";

// components
import CustomButton from "../CustomButton";
import { updateSearchParams } from "../../utils/update-search-params";

// interfaces
export interface ShowMoreButtonPropsInterface {
    pageNumber: number;
    isNext: boolean;
}

const ShowMoreButton = ({ pageNumber, isNext }: ShowMoreButtonPropsInterface) => {
    // get router
    const router = useRouter();

    // handle navigation
    const handleNavigation = () => {
        
        const newLimit = (pageNumber + 1) * 10;

        const newPathName = updateSearchParams("limit", `${newLimit}`);

        router.push(newPathName);
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