import CartItem from "@/components/CartItem";

const CartContainer = (): JSX.Element => {
    return (
        <>
            <div className="space-y-5">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

            <div className="border border-[rgba(240,_242,_245,_1)] rounded-3xl space-y-4 px-5 py-6 mt-[73px]">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="text-brand-gray">
                        Orders
                    </span>

                    <span className="py-[6px] px-[10px] bg-[rgba(240,_242,_245,_1)] rounded-full font-medium text-brand-gray text-xs leading-3">
                        3 Items
                    </span>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-3">
                    <span className="text-brand-gray">
                        Subtotal
                    </span>

                    <span className="font-bold text-xl leading-6 -tracking-[0.5px]">
                        ₦70,000
                    </span>
                </div>

                <button className="bg-brand-blue text-white text-sm font-medium rounded-[20px] py-4 px-14 block w-full hover:bg-brand-blue/90" type="button">
                    Checkout
                </button>

                <button className="bg-white border border-[rgba(240,_242,_245,_1)] text-sm font-medium rounded-[20px] py-4 px-14 block w-full hover:bg-brand-blue/90 hover:text-white" type="button">
                    Clear cart
                </button>
            </div>
        </>
    );
};

export default CartContainer;
