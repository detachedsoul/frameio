"use client";

import Image from "next/image";
import { useState, useId } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

// Dummy list of countries
const countries = [
    {
        country: "Nigeria",
        code: "+234",
        flag: "/nigeria-flag.svg"
    },
    {
        country: "Ghana",
        code: "+111",
        flag: "/nigeria-flag.svg"
    },
    {
        country: "Canada",
        code: "+222",
        flag: "/nigeria-flag.svg"
    },
    {
        country: "United Kingdom",
        code: "+777",
        flag: "/nigeria-flag.svg"
    },
];

const CountryCodePicker = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);

    return (
        <button className="flex items-center gap-2 pr-2 border-r-[0.5px] border-brand-light-blue relative" type="button" onClick={() => {
            setIsOpen(!isOpen);
        }}>
            <Image className="size-3 rounded-full" src={selectedCountry.flag} quality={100} width={12} height={12} alt={selectedCountry.country} />

            <span className="text-brand-black text-sm leading-7">
                {selectedCountry.code}
            </span>

            {isOpen ? (
                <ChevronUpIcon className="text-brand-blue" size={28} strokeWidth={1} />
            ) : (
                <ChevronDownIcon className="text-brand-blue" size={28} strokeWidth={1} />
            )}

            <div className={`absolute grid transition-all ease-in-out duration-300 top-[calc(100%+0.7rem)] border border-[rgba(240,_242,_245,_1)] shadow-[0px_1px_2px_0px_rgba(88,_98,_131,_0.2)] overflow-y-auto max-h-32 ${isOpen ? "block" : "hidden"}`}>
                {countries.map((country) => (
                    <button className={`flex items-center gap-3 relative border-b-[0.5px] border-brand-light-blue last:border-transparent w-full px-4 py-1 ${country.country === selectedCountry.country ? "bg-brand-light-blue" : "bg-white"}`} type="button" onClick={() => {
                        setSelectedCountry(country);
                        setIsOpen(false);
                    }} key={country.country}>
                        <Image className="size-3 rounded-full" src={country.flag} quality={100} width={12} height={12} alt={country.country} />

                        <span className="text-brand-black text-sm leading-7">
                            {country.code}
                        </span>
                    </button>
                ))}
            </div>
        </button>
    );
};

export default CountryCodePicker;
