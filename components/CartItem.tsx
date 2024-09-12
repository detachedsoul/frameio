"use client";

import Image from "next/image";
import DeleteIcon from "@/components/DeleteIcon";
import QuantityControl from "@/components/QuantityControl";

const CartItem = (): JSX.Element => {
    return (
        <div className="flex items-center gap-7 pb-5 flex-wrap border-b border-[rgba(240,_242,_245,_1)] sm:last:pb-5 sm:last:border-b last:border-0 last:pb-0 lg:last:border-0">
            <Image className="w-[150px] h-[150px] rounded-[20px] aspect-auto object-cover object-center" src="/earthly-brown-tee.png" alt="Earthy Brown Frameio Tee" width={150} height={150} priority />

            <div className="grow space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <h4 className="text-xl font-bold">
                            Earthy Brown Frameio Tee
                        </h4>

                        <p className="text-sm leading-4 text-brand-gray">
                            Brand: <span className="text-brand-purple">Frameio</span>
                        </p>
                    </div>

                    <button type="button" aria-label="Delete item from cart">
                        <DeleteIcon />
                    </button>
                </div>

                <div className="flex items-center justify-start lg:justify-between gap-4">
                    <QuantityControl />

                    <div className="flex items-center flex-wrap gap-3 order-first lg:order-last">
                        <span className="font-bold text-xl leading-6 -tracking-[0.5px]">
                            ₦20,000
                        </span>

                        <span className="hidden py-[6px] px-[10px] bg-brand-light-purple rounded-full font-medium text-brand-purple text-xs leading-3 lg:inline-block">
                            In Stock
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
