"use client";

import ProductListing from "@/components/ProductListing";
import ProductListingLoading from "@/components/ProductsListingLoading";
import { useState, useEffect } from "react";

interface ICategories {
	title?: string;
}

const Categories: React.FC<ICategories> = ({ title = "All Collections" }): JSX.Element => {
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

                    <form className="flex items-center bg-[rgba(240,_242,_245,_1)] pr-2 pl-4 rounded-[20px] w-full lg:w-auto" method="get">
                        <label className="flex items-center gap-2 text-brand-gray w-full py-2" htmlFor="search-input">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path className="stroke-current" d="M7.57401 13.6666C10.8775 13.6666 13.5555 10.9886 13.5555 7.68509C13.5555 4.38161 10.8775 1.70361 7.57401 1.70361C4.27053 1.70361 1.59253 4.38161 1.59253 7.68509C1.59253 10.9886 4.27053 13.6666 7.57401 13.6666Z" strokeWidth="0.944444" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="stroke-current" d="M14.1852 14.2961L12.9259 13.0369" strokeWidth="0.944444" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <input className="bg-[rgba(240,_242,_245,_1)] py-2 input" type="search" name="search-input" id="search-input" placeholder="Search for product" />
                        </label>

                        <button className="bg-brand-purple text-white rounded-2xl py-2 px-4 hover:bg-brand-purple/90 hover:ring-1 hover:ring-brand-purple/20 hover:ring-offset-2" type="submit">
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
