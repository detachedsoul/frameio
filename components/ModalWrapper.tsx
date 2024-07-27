"use client";

import CartContainer from "@/components/CartContainer";
import { Dispatch, SetStateAction, useState } from "react";
import { XIcon } from "lucide-react";

interface ModalProps {
    isActive: boolean;
    toggleIsActive: Dispatch<SetStateAction<boolean>>;
}

const ModalWrapper: React.FC<ModalProps> = ({ isActive, toggleIsActive }: ModalProps) => {
    const [popupHeader, setPopupHeader] = useState("Shopping Cart");

    console.log(setPopupHeader)

    return (
        <div className={`fixed bg-[rgba(29,_35,_41,_0.5)] h-screen inset-0 w-full z-50 animate-all duration-500 ease-in-out ${isActive ? "scale-100" : "scale-0"}`}>
            <div className="lg:w-1/2 lg:ml-auto bg-white h-full">
                <div className="h-[calc(100vh-5rem)] lg:h-[calc(100vh-2.5rem)] px-5 lg:px-10 overflow-y-auto">
                    <div className="flex items-center justify-between flex-wrap gap-4 py-5 mb-5 lg:mb-10 sticky top-0 bg-white">
                        {popupHeader === "Shopping Cart" && (
                            <h3 className="font-bold text-2xl flex items-center gap-3">
                                Shopping Cart <span className="bg-brand-black rounded-full py-0.5 px-2.5 text-lg text-white flex place-content-center">3</span>
                            </h3>
                        )}

                        <button className="border border-[rgba(240,_242,_245,_1)] rounded-xl p-2 hover:bg-brand-gray group animate-colors duration-300" type="button" aria-label="Close cart modal" onClick={() => toggleIsActive(false)}>
                            <XIcon className="text-brand-gray group-hover:text-white animate-colors duration-300" size={20} />
                        </button>
                    </div>

                    <CartContainer />
                </div>
            </div>
        </div>
    );
};

export default ModalWrapper;
