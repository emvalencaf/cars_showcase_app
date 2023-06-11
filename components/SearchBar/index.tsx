"use client";

// hooks
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

// components
import Image from "next/image";
import { SearchButton, SearchManufacturer } from "..";

// 
export interface SearchBarPropsInterface {
    setManufacturer: Dispatch<SetStateAction<string>>;
    setModel: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({setManufacturer, setModel}: SearchBarPropsInterface) => {
    // states
    const [searchManufacturer, setSearchManufacturer] = useState<string>('');
    const [searchModel, setSearchModel] = useState<string>('');
    const router = useRouter();

    // handle search for submit events
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (searchManufacturer === '' && searchModel === '') return alert('Please fill in the search bar');

        setModel(searchModel.toLowerCase()); setManufacturer(searchManufacturer.toLowerCase());
    };

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar_item">
                <SearchManufacturer selected={searchManufacturer} setSelected={setSearchManufacturer}/>
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
                    value={searchModel} onChange={(e) => setSearchModel(e.target.value)}
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