"use client";

import { useState } from "react";
// components
import SearchManufacturer from "../SearchManufacturer";

const SearchBar = () => {
    // states
    const [manufacturer, setManufacturer] = useState<string>('');


    // handle search for submit events
    const handleSearch = () => {};

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar_item">
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
            </div>
        </form>
    );
};

export default SearchBar;