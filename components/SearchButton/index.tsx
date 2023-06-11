import Image from "next/image";

export interface SearchButtonPropsInterface {
    otherClasses?: string;
}

const SearchButton = ({otherClasses = ""}:SearchButtonPropsInterface) => {
    return (
        <button
            type="submit"
            className={`-ml-3 z-10 ${otherClasses}`}
        >
            <Image
                src="assets/magnifying-glass.svg"
                alt="maginifying glass"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    );
};

export default SearchButton;