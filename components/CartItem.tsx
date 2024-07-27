"use client";

import Image from "next/image";
import { useState } from "react";

const CartItem = (): JSX.Element => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <div className="flex items-center gap-7 pb-5 flex-wrap border-b border-[rgba(240,_242,_245,_1)] last:border-0 last:pb-0">
            <Image className="w-[150px] h-[150px] rounded-[20px] aspect-auto object-cover object-center" src="/earthly-brown-tee.png" alt="Earthy Brown Frameio Tee" width={150} height={150} priority />

            <div className="grow space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <h4 className="text-xl font-bold">
                            Earthy Brown Frameio Tee
                        </h4>

                        <p className="text-sm leading-4">
                            Brand: <span className="text-brand-blue">Frameio</span>
                        </p>
                    </div>

                    <button aria-label="Delete item from cart">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#EAF1FF"/>
                            <path d="M27.5 14.9833C24.725 14.7083 21.9333 14.5667 19.15 14.5667C17.5 14.5667 15.85 14.65 14.2 14.8167L12.5 14.9833" stroke="#0D1421" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.084 14.142L17.2673 13.0503C17.4007 12.2587 17.5007 11.667 18.909 11.667H21.0923C22.5007 11.667 22.609 12.292 22.734 13.0587L22.9173 14.142" stroke="#0D1421" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M25.7077 17.6167L25.166 26.0084C25.0744 27.3167 24.9993 28.3334 22.6743 28.3334H17.3243C14.9993 28.3334 14.9243 27.3167 14.8327 26.0084L14.291 17.6167" stroke="#0D1421" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.6074 23.75H21.3824" stroke="#0D1421" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.916 20.417H22.0827" stroke="#0D1421" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div className="flex items-center justify-between gap-4">
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

                    <div className="flex items-center flex-wrap gap-3">
                        <span className="font-bold text-xl leading-6 -tracking-[0.5px]">
                            ₦20,000
                        </span>

                        <span className="py-[6px] px-[10px] bg-brand-light-blue rounded-full font-medium text-brand-blue text-xs leading-3">
                            In Stock
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
