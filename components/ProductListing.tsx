import Link from "next/link";
import Image from "next/image";
import { useId } from "react";

type productsType = {
    id: string,
    productImageURL: string,
    productName: string,
    price: string,
    productDescriptionRoute: string
};

const ProductListing = (): JSX.Element => {
    const products: productsType[] = [
        {
            id: useId(),
            productImageURL: "/classic-black-tee.png",
            productName: "Classic Black Frameio Tee",
            price: "20,000",
            productDescriptionRoute: `/t-shirt/classic-black-tee/${useId()}`
        },
        {
            id: useId(),
            productImageURL: "/royal-blue-totebag.png",
            productName: "Royal Blue Frameio Totebag",
            price: "10,000",
            productDescriptionRoute: `/totebag/royal-blue-totebag/${useId()}`
        },
        {
            id: useId(),
            productImageURL: "/earthly-brown-tee.png",
            productName: "Earthly Brown Frameio Tee",
            price: "10,000",
            productDescriptionRoute: `/t-shirt/earthly-brown-tee/${useId()}`
        },
        {
            id: useId(),
            productImageURL: "/sleek-gray-totebag.png",
            productName: "Sleek Gray Frameio Totebag",
            price: "10,000",
            productDescriptionRoute: `/totebag/sleek-gray-totebag/${useId()}`
        },
        {
            id: useId(),
            productImageURL: "/sunshine-lemeon-tee.png",
            productName: "Sunshine Lemon Frameio Tee",
            price: "30,000",
            productDescriptionRoute: `/t-shirt/sunshine-lemeon-tee/${useId()}`
        },
        {
            id: useId(),
            productImageURL: "/pure-white-totebag.png",
            productName: "Pure White Frameio Totebag",
            price: "30,000",
            productDescriptionRoute: `/totebag/pure-white-totebag/${useId()}`
        },
    ];

    return (
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-16">
            {products.map((product: productsType): JSX.Element => (
                <div className="space-y-6" key={product.id}>
                    <Image className="w-full aspect-auto object-cover object-center h-96 lg:h-[350px] xl:h-96" src={product.productImageURL} alt={product.productName} width={320} height={320} title={product.productName} quality={100} />

                    <div className="space-y-[10px]">
                        <Link className="font-bold text-lg leading-5 hover:text-brand-blue" href={product.productDescriptionRoute}>
                            {product.productName}
                        </Link>

                        <p className="text-lg leading-5 text-brand-gray">
                            ₦{product.price}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductListing;
