import Categories from "@/components/categories/Categories";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frameio Stores | Categories",
    description: "Frameio Stores | Browse through our catalog of different luxury products",
};

const Index = (): JSX.Element => {
    return (
        <Categories />
    );
};

export default Index;
