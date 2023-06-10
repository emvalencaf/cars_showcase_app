export const calculateCarRent = (city_mpg: number, year: number): number => {
    const basePricePerDay = 50; // base rental price per day in dollars
    const mileageFactor = 0.1; // additional rate per mile driven
    const ageFactor = 0.05; // additional rate per year of vehicle age


    // calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay * mileageRate * ageRate;

    return rentalRatePerDay;
}