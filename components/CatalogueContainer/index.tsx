"use client"
import { CarPropsInterface } from "../../shared-types/car-props";
import { FilterPropsInterface } from "../../utils/fetch-cars";
import CarCard from "../CarCard";
import ShowMoreButton from "../ShowMoreButton";

export interface CatalogueContainerPropsInterface {
    searchParams: FilterPropsInterface;
    cars?: CarPropsInterface[];
}

const CatalogueContainer = ({cars = [], searchParams}: CatalogueContainerPropsInterface) => {
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
            />
        </section>
    );
};

export default CatalogueContainer;