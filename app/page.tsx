
// components
import CatalogueContainer from "../components/CatalogueContainer";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

// utils
import { fuels, yearsOfProduction } from "../constants";

// interfaces
import { FilterPropsInterface, fetchCars } from "../utils/fetch-cars";

export interface HomePropsInterface {
  searchParams: FilterPropsInterface;
}

export default async function Home({ searchParams }: HomePropsInterface) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2023,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

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
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>

          </div>

          {!isDataEmpety ? (
            <CatalogueContainer cars={allCars} searchParams={searchParams} />
          ): (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>
                {allCars?.message}
              </p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
