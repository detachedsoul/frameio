import Categories from "@/components/categories/Categories";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Frameio Stores | Categories",
    description: "Frameio Stores | Browse through our catalog of different luxury products",
};

interface IParams {
	params: { category: string };
}

const Index: React.FC<IParams> = ({ params }): JSX.Element => {
    return (
        <Categories title={`${params.category} Collections`} />
    );
};

export default Index;
