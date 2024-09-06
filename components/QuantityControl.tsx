"use client";

import CounterDecreaseIcon from "@/components/CounterDecreaseIcon";
import CounterIncreaseIcon from "@/components/CounterIncreaseIcon";
import { useState } from "react";

const QuantityControl = () => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <div className="bg-brand-light-purple text-brand-gray font-medium leading-6 rounded-full py-2 px-3 flex items-center gap-3">
            <button aria-label="Decrease quantity" type="button" onClick={() => decreaseQuantity()}>
                <CounterDecreaseIcon />
            </button>

            {quantity}

            <button aria-label="Increase quantity" type="button" onClick={() => increaseQuantity()}>
                <CounterIncreaseIcon />
            </button>
        </div>
    );
};

export default QuantityControl;
