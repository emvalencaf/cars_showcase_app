"use client"
// hooks
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { useRouter } from 'next/navigation';

// components
import Image from "next/image";

// utils
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "../../utils/update-search-params";

// interfaces
export interface OptionPropsInterface {
    title: string;
    value: string | number;
}
export interface CustomFilterPropsInterface {
    title: string;
    options: OptionPropsInterface[];
    setFilter: Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<number>>;
}

const CustomFilter = ({ options, setFilter }: CustomFilterPropsInterface) => {
    // states
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    setFilter(e.value);
                }}
            >
                <div className="relative w-fit z-10">
                    <Listbox.Button className="custom-filter__btn">
                        <span className="block truncate">
                            {selected.title}
                        </span>
                        <Image
                            src="/assets/chevron-up-down.svg"
                            width={20}
                            height={20}
                            className="ml-4 object contain"
                            alt="chevron up down"
                        />
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="custom-filter__options">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.title}
                                    value={option}
                                    className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue' : 'text-gray-900'}`}
                                >
                                    {({ selected }) => (
                                        <>
                                        <span className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>
                                            {option.title}
                                        </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomFilter;