"use client"

import { Dispatch, SetStateAction } from "react";
// components
import { CarCard, ShowMoreButton } from "..";

// interfaces
import { CarPropsInterface } from "../../shared-types/car-props";
import { FilterPropsInterface } from "../../utils/fetch-cars";
export interface CatalogueContainerPropsInterface {
    searchParams: FilterPropsInterface;
    cars?: CarPropsInterface[];
    setLimit: Dispatch<SetStateAction<number>>;
}

const CatalogueContainer = ({cars = [], searchParams, setLimit}: CatalogueContainerPropsInterface) => {
    return (
        <section>
            <div className="home__cars-wrapper">
                {cars.length >= 1 && cars.map((car, index) => (
                    <CarCard key={`${car.class}-${car.model}-${car.model}-${index}`} car={car} />
                ))}
            </div>
            <ShowMoreButton
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > cars.length}
                setLimit={setLimit}
            />
        </section>
    );
};

export default CatalogueContainer;