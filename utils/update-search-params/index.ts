export const updateSearchParams = (type: string, value: string): string => {
    // create a search params
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type, value);
        
    // creating the url with the search params
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};