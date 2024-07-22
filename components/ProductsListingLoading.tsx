const ProductListingLoading = (): JSX.Element => {
    return (
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-16">
            <div className="h-96 bg-brand-blue/20 animate-pulse"></div>
            <div className="h-96 bg-brand-blue/20 animate-pulse"></div>
            <div className="h-96 bg-brand-blue/20 animate-pulse"></div>
            <div className="h-96 bg-brand-blue/20 animate-pulse"></div>
            <div className="h-96 bg-brand-blue/20 animate-pulse"></div>
            <div className="h-96 bg-brand-blue/20 animate-pulse"></div>
        </div>
    );
};

export default ProductListingLoading;
