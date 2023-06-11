"use client";

// componets
import Image from "next/image";
import CustomButton from "../CustomButton";

// utils
import { calculateCarRent } from "../../utils/calculate-car-rent";

// interfaces
import { CarPropsInterface } from "../../shared-types/car-props";
import { useState } from "react";
import CarDetails from "../CarDetails";
import { generateCarImageUrl } from "../../utils/generate-car-image-url";
export interface CarCardPropsInterface {
    car: CarPropsInterface;
}

const CarCard = ({ car }: CarCardPropsInterface) => {
    // sates
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // getting data
    const { city_mpg, year, make, model, transmission, drive } = car;

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className="car-card group">

            {/* title */}
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>

            {/* price */}
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>

            {/* image */}
            <div className="relative w-full h-40 my-3 object-contain">
                <Image
                    src={generateCarImageUrl(car)}
                    alt={"car model"}
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            {/* cars details */}
            <div className="relative flex w-full mt-2">
                <div className="flex grup-hover:invisible w-full justify-between text-gray">

                    {/* about steering wheel */}
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="assets/steering-wheel.svg"
                            width={20}
                            height={20}
                            alt="steering wheel"
                        />
                        <p className="text-[14px]">
                            {transmission === "a" ? 'Automatic' : 'Manual'}
                        </p>
                    </div>

                    {/* about tire */}
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="assets/tire.svg"
                            width={20}
                            height={20}
                            alt="tire"
                        />
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    {/* about tire */}
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="assets/gas.svg"
                            width={20}
                            height={20}
                            alt="gas"
                        />
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>
                {/* custom buttton */}
                <div className="car-card__btn-container">
                    <CustomButton
                        title="view more"
                        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="assets/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCard;