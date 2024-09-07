import CountryCodePicker from "@/components/CountryCodePicker";
import { Dispatch, SetStateAction } from "react";

interface ICartContainer {
    toggleModalHeader: Dispatch<SetStateAction<string>>;
};

const DeliveryInformation: React.FC<ICartContainer> = ({ toggleModalHeader }: ICartContainer) => {
    return (
		<>
			<form className="grid gap-5 md:grid-cols-2 px-5 lg:px-10">
				<label
					className="grid gap-2"
					htmlFor="firstName"
				>
					<span className="text-sm font-medium leading-7">
						First Name
					</span>

					<input
						className="input-form"
						type="text"
						name="firstName"
						id="firstName"
						placeholder="e.g John"
					/>
				</label>

				<label
					className="grid gap-2"
					htmlFor="lastName"
				>
					<span className="text-sm font-medium leading-7">
						Last Name
					</span>

					<input
						className="input-form"
						type="text"
						name="lastName"
						id="lastName"
						placeholder="e.g Doe"
					/>
				</label>

				<label
					className="grid gap-2"
					htmlFor="email"
				>
					<span className="text-sm font-medium leading-7">
						Email Address
					</span>

					<input
						className="input-form"
						type="email"
						name="email"
						id="email"
						placeholder="e.g doe@frameio.com.ng"
					/>
				</label>

				<label
					className="grid gap-2 w-full"
					htmlFor="phoneNumber"
				>
					<span className="text-sm font-medium leading-7">
						Phone Number
					</span>

					<div className="flex items-center gap-2 py-0.5 pl-0 input-form">
						<CountryCodePicker />

						<input
							className="input-form px-0 py-3.5 shadow-none border-0 border-transparent rounded-none transition-none focus:ring-transparent"
							type="text"
							name="phoneNumber"
							id="phoneNumber"
							inputMode="numeric"
						/>
					</div>
				</label>

				<label
					className="grid gap-2 md:col-span-2"
					htmlFor="deliveryAddress"
				>
					<span className="text-sm font-medium leading-7">
						Delivery Address
					</span>

					<textarea
						className="input-form"
						placeholder="Delivery address, directions and state."
						id="deliveryAddress"
						rows={10}
					></textarea>
				</label>

				<label
					className="flex items-center gap-2 text-brand-gray md:col-span-2"
					htmlFor="saveInfo"
				>
					<input
						className="input-checkbox"
						type="checkbox"
						id="saveInfo"
					/>
					Allow Frameio save your information
				</label>

				<label
					className="flex items-center gap-2 text-brand-gray md:col-span-2"
					htmlFor="contactUser"
				>
					<input
						className="input-checkbox"
						type="checkbox"
						id="contactUser"
					/>
					Allow Frameio contact you through SMS & Whatsapp
				</label>
			</form>

			<div className="border border-[rgba(240,_242,_245,_1)] rounded-3xl space-y-4 px-5 py-6 mt-16 mx-5 lg:mx-10">
				<div className="space-y-5">
					<div className="flex items-center justify-between flex-wrap gap-3">
						<span className="text-brand-gray">Sub Total</span>

						<span className="font-bold leading-6 -tracking-[0.5px]">
							₦70,000.00
						</span>
					</div>

					<div className="flex items-center justify-between flex-wrap gap-3">
						<span className="text-brand-gray">Tax(1%)</span>

						<span className="font-bold leading-6 -tracking-[0.5px]">
							₦700
						</span>
					</div>

					<div className="flex items-center justify-between flex-wrap gap-3">
						<span className="text-brand-gray">Delivery Fee</span>

						<span className="font-bold leading-6 -tracking-[0.5px]">
							₦3,000.00
						</span>
					</div>

					<div className="flex items-center justify-between flex-wrap gap-3">
						<span className="text-brand-gray">Total</span>

						<span className="font-bold leading-6 -tracking-[0.5px]">
							₦73,700.00
						</span>
					</div>
				</div>

				<button
					className="bg-brand-purple text-white text-sm font-medium rounded-[20px] py-4 px-14 block w-full hover:bg-brand-purple/90 hover:ring-1 hover:ring-brand-purple/20 hover:ring-offset-2"
					type="button"
				>
					Pay Now
				</button>

				<button
					className="bg-white border border-brand-purple text-brand-purple text-sm font-medium rounded-[20px] py-4 px-14 block w-full hover:bg-brand-purple/90 hover:text-white hover:ring-1 hover:ring-brand-purple/20 hover:ring-offset-2"
					type="button"
					onClick={() => toggleModalHeader("Shopping Cart")}
				>
					Back to cart
				</button>

				<button
					className="bg-white border border-[rgba(240,_242,_245,_1)] text-sm font-medium rounded-[20px] py-4 px-14 block w-full hover:bg-brand-purple/90 hover:text-white hover:ring-1 hover:ring-brand-purple/20 hover:ring-offset-2"
					type="button"
				>
					Clear cart
				</button>
			</div>
		</>
	);
};

export default DeliveryInformation;
