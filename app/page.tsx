"use client";

import HeroSection from "@/components/HeroSection";
import ProductListing from "@/components/ProductListing";
import ProductListingLoading from "@/components/ProductsListingLoading";
import Link from "next/link";
import { useState, useEffect } from "react";

const Index = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <HeroSection />

            <section className="mt-12 scroll-mt-20" id="content-container">
                <div className="flex items-center flex-wrap justify-between gap-4 mb-10">
                    <h2 className="font-medium text-xl leading-6">
                        Our <span className="hidden lg:inline">Newest</span> Collections
                    </h2>

                    <Link className="flex items-center gap-3 leading-5 text-brand-gray hover:text-brand-purple" href="/categories">
                        <span className="hidden lg:inline-block">View All Collections</span>

                        <span className="lg:hidden">Explore</span>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="0.3" y="0.3" width="23.4" height="23.4" rx="11.7" fill="white" />
                            <rect className="stroke-current" x="0.3" y="0.3" width="23.4" height="23.4" rx="11.7" strokeWidth="0.6" />
                            <path className="stroke-current" d="M14.625 10.125L16.5 12M16.5 12L14.625 13.875M16.5 12H7.5" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
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

export default Index;
