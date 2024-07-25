"use client";

import ProductListing from "@/components/ProductListing";
import ProductListingLoading from "@/components/ProductsListingLoading";
import { useState, useEffect } from "react";

const Categories = ({ title = "All Collections" }: {title?: string}): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <section className="mt-12">
                <div className="flex items-center flex-wrap justify-between gap-4 mb-10">
                    <h1 className="font-medium text-xl leading-6">
                        {title}
                    </h1>

                    <form className="flex items-center bg-[rgba(240,_242,_245,_1)] pr-2 py-2 pl-4 rounded-[20px]" method="get">
                        <label className="flex items-center gap-2" htmlFor="search-input">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M7.57401 13.6666C10.8775 13.6666 13.5555 10.9886 13.5555 7.68509C13.5555 4.38161 10.8775 1.70361 7.57401 1.70361C4.27053 1.70361 1.59253 4.38161 1.59253 7.68509C1.59253 10.9886 4.27053 13.6666 7.57401 13.6666Z" stroke="#586283" strokeWidth="0.944444" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.1852 14.2961L12.9259 13.0369" stroke="#586283" strokeWidth="0.944444" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <input className="bg-[rgba(240,_242,_245,_1)] py-2 input placeholder:text-brand-gray" type="search" name="search-input" id="search-input" placeholder="Search for product" />
                        </label>

                        <button className="bg-brand-blue text-white rounded-2xl py-2 px-4 hover:bg-brand-blue/90" type="submit">
                            Search
                        </button>
                    </form>
                </div>

                {isLoading ? (
                    <ProductListingLoading />
                ) : (
                    <ProductListing />
                )}
            </section>
        </>
    );
};

export default Categories;
