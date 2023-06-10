// interfaces
import { CarPropsInterface } from "../../shared-types/car-props";

export const generateCarImageUrl = (car: CarPropsInterface, angle?: string): string => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make, year, model} = car;

    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "");
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${url}`;
};