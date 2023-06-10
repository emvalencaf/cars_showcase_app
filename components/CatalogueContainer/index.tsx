"use client"
import { CarPropsInterface } from "../../shared-types/car-props";
import CarCard from "../CarCard";

export interface CatalogueContainerPropsInterface {
    cars?: CarPropsInterface[];
}

const CatalogueContainer = ({cars = []}: CatalogueContainerPropsInterface) => {
    return (
        <section>
            <div className="home__cars-wrapper">
                {cars.length >= 1 && cars.map((car, index) => (
                    <CarCard key={`${car.class}-${car.model}-${car.model}-${index}`} car={car} />
                ))}
            </div>
        </section>
    );
};

export default CatalogueContainer;