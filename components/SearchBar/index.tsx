"use client";

// hooks
import { useState } from "react";
import { useRouter } from "next/navigation";

// components
import SearchManufacturer from "../SearchManufacturer";
import SearchButton from "../SearchButton";
import Image from "next/image";

const SearchBar = () => {
    // states
    const [manufacturer, setManufacturer] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const router = useRouter();

    // handle search for submit events
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manufacturer === '' && model === '') return alert('Please fill in the search bar');

        updateSearchParams(model.toLowerCase(), manufacturer.toLocaleLowerCase());
    };

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        // updated model params in search params
        model ?
            searchParams.set('model', model)
            : searchParams.delete('model');

        // updated manufacturer params in search params
        manufacturer ?
            searchParams.set('manufacturer', manufacturer)
            : searchParams.delete('manufacturer');
        
        // creating the url with the search params
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        // updating the url using router hook
        router.push(newPathname);
    }

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar_item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            </div>
            <SearchButton otherClasses="sm:hidden"/>
            <div className="searchbar__item">
                <Image
                    src="/assets/model-icon.png"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                    alt="car model"
                />
                <input
                    type="text"
                    name="model"
                    value={model} onChange={(e) => setModel(e.target.value)}
                    placeholder="Tiguan"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    );
};

export default SearchBar;