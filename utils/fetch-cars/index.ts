export interface FilterPropsInterface {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export async function fetchCars({ manufacturer, year, fuel, limit, model}: FilterPropsInterface) {
    const headers = {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;

    const response = await fetch( url, {
        headers,
    });

    const result = await response.json();

    return result;
}