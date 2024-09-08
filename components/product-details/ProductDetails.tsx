"use client";

import ProductListing from "@/components/ProductListing";
import ProductListingLoading from "@/components/ProductsListingLoading";
import QuantityControl from "@/components/QuantityControl";
import Image from "next/image";
import Link from "next/link";
import { IProductDetails } from "@/constants/interface";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "lucide-react";

const ProductDetails: React.FC<IProductDetails> = ({
	params,
}: IProductDetails) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
	}, []);

	return (
		<div className="mt-12">
			<section className="space-y-11">
				<div className="text-brand-gray leading-7 flex flex-wrap items-center gap-2.5">
					<Link href="/">Home</Link>

					<ChevronRightIcon size={20} />

					<Link href="/categories">Categories</Link>

					<ChevronRightIcon size={20} />

					<Link href={`/categories/${params.category}`}>
                    {params.category}</Link>

					<ChevronRightIcon size={20} />

					<span className="text-brand-purple font-medium">
                        {params.productName}
					</span>
				</div>

				<div className="grid gap-7 lg:gap-12 md:grid-cols-12 lg:items-center">
					<div className="relative h-96 shadow-[2px_2px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-[32px] lg:col-span-5 lg:h-[500px] xl:h-[550px] md:col-span-6">
						<Image
							className="w-full h-full rounded-[32px] aspect-auto object-cover object-center sm:object-top md:object-center"
							src="/earthly-brown-tee.png"
							alt="Earthy Brown Frameio Tee"
							fill
							priority
						/>

						<button
							className="absolute right-4 top-4 w-10 h-10 grid place-content-center rounded-full bg-brand-light-purple"
							type="button"
							aria-label="Save product for later"
						>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
							>
								<path
									className="fill-brand-purple stroke-brand-purple"
									d="M8.41325 13.8733C8.18659 13.9533 7.81325 13.9533 7.58659 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32659 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>

					<div className="space-y-6 lg:col-span-7 md:col-span-6">
						<div className="space-y-2">
							<h1 className="font-bold text-xl leading-6">
								Earthy Brown Frameio Tee
							</h1>

							<p className="text-sm leading-4 text-brand-gray">
								Brand:{" "}
								<span className="text-brand-purple">
									Frameio
								</span>
							</p>
						</div>

						<p className="text-brand-gray">
							Elevate your everyday look with the Earthy Brown
							Frameio Tee. Crafted from premium, breathable
							cotton, this tee offers unmatched comfort and
							durability. Its rich, earthy brown hue provides a
							versatile and timeless addition to your wardrobe.
							Designed with a relaxed fit and classic crew
							neckline, the Frameio Tee effortlessly blends style
							with simplicity. Perfect for any casual occasion,
							this tee is your go-to choice for a laid-back, yet
							polished appearance.
						</p>

						<div className="flex items-center flex-wrap gap-3">
							<span className="font-bold text-xl leading-6 -tracking-[0.5px]">
								₦20,000
							</span>

							<span className="py-[6px] px-[10px] bg-brand-light-purple rounded-full font-medium text-brand-purple text-xs leading-3">
								In Stock
							</span>
						</div>

						<div className="flex items-center flex-wrap justify-between gap-6 lg:justify-start">
							<QuantityControl />

							<button
								className="bg-brand-purple text-white text-sm font-bold rounded-[20px] py-3 px-6 flex items-center gap-3 hover:bg-brand-purple/90 hover:ring-1 hover:ring-brand-purple/20 hover:ring-offset-2"
								type="button"
							>
								<svg
									width="20"
									height="21"
									viewBox="0 0 20 21"
									fill="none"
								>
									<path
										d="M7.34162 2.16663L4.32495 5.19163"
										stroke="white"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M12.6584 2.16663L15.6751 5.19163"
										stroke="white"
										strokeMiterlimit="10"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M1.66675 7.04167C1.66675 5.5 2.49175 5.375 3.51675 5.375H16.4834C17.5084 5.375 18.3334 5.5 18.3334 7.04167C18.3334 8.83333 17.5084 8.70833 16.4834 8.70833H3.51675C2.49175 8.70833 1.66675 8.83333 1.66675 7.04167Z"
										stroke="white"
									/>
									<path
										d="M8.1333 12.1666V15.125"
										stroke="white"
										strokeLinecap="round"
									/>
									<path
										d="M11.9666 12.1666V15.125"
										stroke="white"
										strokeLinecap="round"
									/>
									<path
										d="M2.91675 8.83337L4.09175 16.0334C4.35841 17.65 5.00008 18.8334 7.38341 18.8334H12.4084C15.0001 18.8334 15.3834 17.7 15.6834 16.1334L17.0834 8.83337"
										stroke="white"
										strokeLinecap="round"
									/>
								</svg>
								Add to Cart
							</button>
						</div>

						<div className="space-y-3.5">
							<p className="flex items-center gap-2.5">
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
								>
									<path
										className="stroke-brand-purple"
										d="M2.40625 7.65625L5.46875 10.7188L11.5938 4.15625"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								100% happiness guarantee
							</p>

							<p className="flex items-center gap-2.5">
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
								>
									<path
										className="stroke-brand-purple"
										d="M2.40625 7.65625L5.46875 10.7188L11.5938 4.15625"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								Fast delivery under 24hours
							</p>

							<p className="flex items-center gap-2.5">
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
								>
									<path
										className="stroke-brand-purple"
										d="M2.40625 7.65625L5.46875 10.7188L11.5938 4.15625"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
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

					<Link
						className="flex items-center gap-3 leading-5 text-brand-gray hover:text-brand-purple"
						href="/categories"
					>
						View More
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<rect
								x="0.3"
								y="0.3"
								width="23.4"
								height="23.4"
								rx="11.7"
								fill="white"
							/>
							<rect
								className="stroke-current"
								x="0.3"
								y="0.3"
								width="23.4"
								height="23.4"
								rx="11.7"
								strokeWidth="0.6"
							/>
							<path
								className="stroke-current"
								d="M14.625 10.125L16.5 12M16.5 12L14.625 13.875M16.5 12H7.5"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</div>

				{isLoading ? <ProductListingLoading /> : <ProductListing />}
			</section>
		</div>
	);
};

export default ProductDetails;
