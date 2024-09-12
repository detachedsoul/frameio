import ProductDetails from "@/components/product-details/ProductDetails";
import { IProductDetails } from "@/constants/interface";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frameio Stores | Earthy Brown Frameio Tee",
    description: "Frameio Stores | Earthy Brown Frameio Tee",
};

const Index: React.FC<IProductDetails> = ({ params }) => {
    return (
        <ProductDetails params={params} />
    );
};

export default Index;
