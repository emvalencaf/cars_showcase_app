"use client"

// hooks
import { useEffect, useState } from "react";

// components
import { CatalogueContainer, CustomFilter, Hero, SearchBar } from '../components';

// utils
import { fuels, manufacturers, yearsOfProduction } from "../constants";
import { CarPropsInterface } from "../shared-types/car-props";

// interfaces
import { FilterPropsInterface, fetchCars } from "../utils/fetch-cars";
import Image from "next/image";

export interface HomePropsInterface {
  searchParams: FilterPropsInterface;
}

export default function Home({ searchParams }: HomePropsInterface) {

  // states
  const [allCars, setAllCars] = useState<CarPropsInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // search states
  const [manufacturer, setManufacturer] = useState<string>('');
  const [model, setModel] = useState<string>('');

  // filter states
  const [fuel, setFuel] = useState<string>('');
  const [year, setYear] = useState<number>(2022);

  // pagination states
  const [limit, setLimit] = useState<number>(10);


  // fetch cars data
  const getCars = async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
      setError((error as Error)?.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, manufacturer, model, limit]);

  const isDataEmpety = !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>
            Explore the cars you might love
          </p>

          <div className="home__filters">
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
            </div>

          </div>

          {allCars.length > 0 ? (
            <>
              <CatalogueContainer cars={allCars} searchParams={{
                manufacturer: manufacturer || '',
                model: model || '',
                year: year || 2022,
                fuel: fuel || '',
                limit: limit || 10,
              }} setLimit={setLimit} />
              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="/assets/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              )}
            </>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>
                {!!error && error}
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
