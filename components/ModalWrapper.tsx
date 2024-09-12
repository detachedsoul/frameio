"use client";

import CartContainer from "@/components/CartContainer";
import DeliveryInformation from "@/components/DeliveryInformation";
import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import { XIcon } from "lucide-react";

interface ModalProps {
    isActive: boolean;
    toggleIsActive: Dispatch<SetStateAction<boolean>>;
}

const ModalWrapper: React.FC<ModalProps> = ({ isActive, toggleIsActive }) => {
    const [popupHeader, setPopupHeader] = useState("Shopping Cart");

    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        container?.current?.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [popupHeader]);

    // Calculate dynamic height of content container regardless of whether address and bottom bar are visible in iOS
    useEffect(() => {
		const setViewportHeight = () => {
			const vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		};

		setViewportHeight();

		window.addEventListener("resize", setViewportHeight);

		return () => {
			window.removeEventListener("resize", setViewportHeight);
		};
	}, []);

    return (
		<div
			className={`fixed bg-[rgba(29,_35,_41,_0.5)] h-screen inset-0 w-full z-50 transition-transform duration-700 ease-in-out ${
				isActive ? "translate-x-0" : "translate-x-full"
			}`}
		>
			<div
				className="md:w-4/5 md:ml-auto bg-white lg:w-1/2"
				style={{ height: "calc(var(--vh, 1vh) * 100)" }}
			>
				<div
					className="h-full overflow-y-auto bg-white pb-5"
					ref={container}
				>
					<div className="flex items-center justify-between flex-wrap gap-4 mb-5 p-5 lg:px-10 sticky z-[1024] top-0 bg-white">
						{popupHeader === "Shopping Cart" && (
							<h3 className="font-bold text-2xl flex items-center gap-3">
								Shopping Cart{" "}
								<span className="bg-brand-black rounded-full py-[1px] px-2.5 text-lg text-white grid place-content-center">
									3
								</span>
							</h3>
						)}

						{popupHeader !== "Shopping Cart" && (
							<h3 className="font-bold text-2xl block">
								{popupHeader}
							</h3>
						)}

						<button
							className="border border-[rgba(240,_242,_245,_1)] rounded-xl p-2 hover:bg-brand-purple group animate-colors duration-300"
							type="button"
							aria-label="Close cart modal"
							onClick={() => toggleIsActive(false)}
						>
							<XIcon
								className="text-brand-gray group-hover:text-white animate-colors duration-300"
								size={20}
							/>
						</button>
					</div>

					{popupHeader === "Shopping Cart" && (
						<CartContainer toggleModalHeader={setPopupHeader} />
					)}

					{popupHeader !== "Shopping Cart" && (
						<DeliveryInformation
							toggleModalHeader={setPopupHeader}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ModalWrapper;
