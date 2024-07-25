import ProductDetails from "@/components/product-details/ProductDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frameio Stores | Earthy Brown Frameio Tee",
    description: "Frameio Stores | Earthy Brown Frameio Tee",
};

const Index = (): JSX.Element => {
    return (
        <ProductDetails />
    );
};

export default Index;
