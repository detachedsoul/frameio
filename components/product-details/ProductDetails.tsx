"use client";

import ProductListing from "@/components/ProductListing";
import ProductListingLoading from "@/components/ProductsListingLoading";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "lucide-react";

const ProductDetails = (): JSX.Element => {
    const [quantity, setQuantity] = useState(1);

    const [isLoading, setIsLoading] = useState(true);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    return (
        <div className="mt-12">
            <section className="space-y-11">
                <div className="text-brand-gray leading-7 flex flex-wrap items-center gap-2.5">
                    Home <ChevronRightIcon size={20} />

                    Categories <ChevronRightIcon size={20} />

                    T-Shirts <ChevronRightIcon size={20} />

                    <span className="text-brand-blue font-medium">Earthy Brown Frameio Tee</span>
                </div>

                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="relative h-96 shadow-[2px_2px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[32px] lg:col-span-5 lg:h-[500px] xl:h-[550px]">
                        <Image className="w-full h-full rounded-[32px] aspect-auto object-cover object-center" src="/earthly-brown-tee.png" alt="Earthy Brown Frameio Tee" fill priority />

                        <button className="absolute right-4 top-4 w-10 h-10 grid place-content-center rounded-full bg-brand-light-blue" type="button" aria-label="Save product for later">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z" fill="#3861FB" stroke="#3861FB" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6 lg:col-span-7">
                        <div className="space-y-2">
                            <h1 className="font-bold text-xl leading-6">
                                Earthy Brown Frameio Tee
                            </h1>

                            <p className="text-sm leading-4">
                                Brand: <span className="text-brand-blue">Frameio</span>
                            </p>
                        </div>

                        <p className="text-brand-gray">
                            Elevate your everyday look with the Earthy Brown Frameio Tee. Crafted from premium, breathable cotton, this tee offers unmatched comfort and durability. Its rich, earthy brown hue provides a versatile and timeless addition to your wardrobe. Designed with a relaxed fit and classic crew neckline, the Frameio Tee effortlessly blends style with simplicity. Perfect for any casual occasion, this tee is your go-to choice for a laid-back, yet polished appearance.
                        </p>

                        <div className="flex items-center flex-wrap gap-3">
                            <span className="font-bold text-xl leading-6 -tracking-[0.5px]">
                                ₦20,000
                            </span>

                            <span className="py-[6px] px-[10px] bg-brand-light-blue rounded-full font-medium text-brand-blue text-xs leading-3">
                                In Stock
                            </span>
                        </div>

                        <div className="flex items-center flex-wrap gap-6">
                            <div className="bg-brand-light-blue text-brand-gray font-medium leading-6 rounded-full py-2 px-3 flex items-center gap-3">
                                <button aria-label="Decrease quantity" type="button" onClick={() => decreaseQuantity()}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <rect y="0.5" width="24" height="24" rx="12" fill="#3861FB" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7 12.5C7 12.3674 7.04789 12.2402 7.13313 12.1464C7.21838 12.0527 7.33399 12 7.45455 12H16.5455C16.666 12 16.7816 12.0527 16.8669 12.1464C16.9521 12.2402 17 12.3674 17 12.5C17 12.6326 16.9521 12.7598 16.8669 12.8536C16.7816 12.9473 16.666 13 16.5455 13H7.45455C7.33399 13 7.21838 12.9473 7.13313 12.8536C7.04789 12.7598 7 12.6326 7 12.5Z" fill="white" />
                                    </svg>
                                </button>

                                {quantity}

                                <button aria-label="Increase quantity" type="button" onClick={() => increaseQuantity()}>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <rect y="0.5" width="24" height="24" rx="12" fill="#3861FB"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 7.5C12.1206 7.5 12.2362 7.54789 12.3214 7.63313C12.4067 7.71838 12.4545 7.83399 12.4545 7.95455V12.0455H16.5455C16.666 12.0455 16.7816 12.0933 16.8669 12.1786C16.9521 12.2638 17 12.3794 17 12.5C17 12.6206 16.9521 12.7362 16.8669 12.8214C16.7816 12.9067 16.666 12.9545 16.5455 12.9545H12.4545V17.0455C12.4545 17.166 12.4067 17.2816 12.3214 17.3669C12.2362 17.4521 12.1206 17.5 12 17.5C11.8794 17.5 11.7638 17.4521 11.6786 17.3669C11.5933 17.2816 11.5455 17.166 11.5455 17.0455V12.9545H7.45455C7.33399 12.9545 7.21838 12.9067 7.13313 12.8214C7.04789 12.7362 7 12.6206 7 12.5C7 12.3794 7.04789 12.2638 7.13313 12.1786C7.21838 12.0933 7.33399 12.0455 7.45455 12.0455H11.5455V7.95455C11.5455 7.83399 11.5933 7.71838 11.6786 7.63313C11.7638 7.54789 11.8794 7.5 12 7.5Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>

                            <button className="bg-brand-blue text-white text-sm font-bold rounded-[20px] py-3 px-6 flex items-center gap-3 hover:bg-brand-blue/90" type="submit">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M7.34162 2.16663L4.32495 5.19163" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.6584 2.16663L15.6751 5.19163" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.66675 7.04167C1.66675 5.5 2.49175 5.375 3.51675 5.375H16.4834C17.5084 5.375 18.3334 5.5 18.3334 7.04167C18.3334 8.83333 17.5084 8.70833 16.4834 8.70833H3.51675C2.49175 8.70833 1.66675 8.83333 1.66675 7.04167Z" stroke="white"/>
                                    <path d="M8.1333 12.1666V15.125" stroke="white" strokeLinecap="round"/>
                                    <path d="M11.9666 12.1666V15.125" stroke="white" strokeLinecap="round"/>
                                    <path d="M2.91675 8.83337L4.09175 16.0334C4.35841 17.65 5.00008 18.8334 7.38341 18.8334H12.4084C15.0001 18.8334 15.3834 17.7 15.6834 16.1334L17.0834 8.83337" stroke="white" strokeLinecap="round"/>
                                </svg>

                                Add to Cart
                            </button>
                        </div>

                        <div className="space-y-3.5">
                            <p className="flex items-center gap-2.5">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.40625 7.65625L5.46875 10.7188L11.5938 4.15625" stroke="#3861FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                100% happiness guarantee
                            </p>

                            <p className="flex items-center gap-2.5">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.40625 7.65625L5.46875 10.7188L11.5938 4.15625" stroke="#3861FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                Fast delivery under 24hours
                            </p>

                            <p className="flex items-center gap-2.5">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.40625 7.65625L5.46875 10.7188L11.5938 4.15625" stroke="#3861FB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                Enjoy low delivery fee
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-12">
                <div className="flex items-center flex-wrap justify-between gap-4 mb-10">
                    <h2 className="font-medium text-xl leading-6">
                        Similar Products
                    </h2>

                    <Link className="flex items-center gap-3 leading-5 text-brand-gray" href="/categories">
                        View All Collections

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect x="0.3" y="0.3" width="23.4" height="23.4" rx="11.7" fill="white" />
                            <rect x="0.3" y="0.3" width="23.4" height="23.4" rx="11.7" stroke="#586283" strokeWidth="0.6" />
                            <path d="M14.625 10.125L16.5 12M16.5 12L14.625 13.875M16.5 12H7.5" stroke="#586283" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {isLoading ? (
                    <ProductListingLoading />
                ) : (
                    <ProductListing />
                )}
            </section>
        </div>
    );
};

export default ProductDetails;
