const HeroSection = (): JSX.Element => {
    return (
        <div className="space-y-5 py-12 lg:w-[70%]">
            <h1 className="font-bold text-4xl -tracking-[2px] lg:text-5xl lg:leading-[60px]">
                Explore the finest collection of simple & luxury fashion wears.
            </h1>

            <p className="leading-8 text-lg text-[rgba(88,_98,_131,_1)] lg:text-xl lg:w-[70%]">
                Frameio is dedicated to providing you with high-quality, stylish & simple apparels that seamlessly blends comfort and elegance.
            </p>

            <button className="bg-brand-blue text-white flex items-center gap-3 rounded-[20px] py-4 px-5 hover:bg-brand-blue/90" type="button">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.79999 4.00005V4.80005H3.73359C3.38339 4.80013 3.04593 4.93145 2.7878 5.16811C2.52967 5.40477 2.3696 5.72957 2.33919 6.07845L1.67839 13.6784C1.66154 13.8717 1.68504 14.0664 1.74741 14.2501C1.80977 14.4338 1.90964 14.6026 2.04067 14.7456C2.17171 14.8887 2.33105 15.003 2.50859 15.0812C2.68612 15.1594 2.87798 15.1999 3.07199 15.2H12.928C13.1221 15.2 13.314 15.1596 13.4916 15.0814C13.6693 15.0033 13.8287 14.889 13.9598 14.7459C14.091 14.6028 14.1909 14.4341 14.2533 14.2503C14.3157 14.0665 14.3392 13.8718 14.3224 13.6784L13.6616 6.07845C13.6312 5.72943 13.471 5.40451 13.2127 5.16784C12.9544 4.93116 12.6167 4.79993 12.2664 4.80005H11.2V4.00005C11.2 3.15136 10.8628 2.33742 10.2627 1.73731C9.66261 1.13719 8.84868 0.800049 7.99999 0.800049C7.15129 0.800049 6.33736 1.13719 5.73725 1.73731C5.13713 2.33742 4.79999 3.15136 4.79999 4.00005ZM7.99999 2.00005C7.46955 2.00005 6.96085 2.21076 6.58577 2.58584C6.2107 2.96091 5.99999 3.46962 5.99999 4.00005V4.80005H9.99999V4.00005C9.99999 3.46962 9.78927 2.96091 9.4142 2.58584C9.03913 2.21076 8.53042 2.00005 7.99999 2.00005ZM5.99999 8.00005C5.99999 8.53048 6.2107 9.03919 6.58577 9.41426C6.96085 9.78933 7.46955 10 7.99999 10C8.53042 10 9.03913 9.78933 9.4142 9.41426C9.78927 9.03919 9.99999 8.53048 9.99999 8.00005V7.00005C9.99999 6.84092 10.0632 6.68831 10.1757 6.57578C10.2882 6.46326 10.4409 6.40005 10.6 6.40005C10.7591 6.40005 10.9117 6.46326 11.0243 6.57578C11.1368 6.68831 11.2 6.84092 11.2 7.00005V8.00005C11.2 8.84874 10.8628 9.66267 10.2627 10.2628C9.66261 10.8629 8.84868 11.2 7.99999 11.2C7.15129 11.2 6.33736 10.8629 5.73725 10.2628C5.13713 9.66267 4.79999 8.84874 4.79999 8.00005V7.00005C4.79999 6.84092 4.8632 6.68831 4.97572 6.57578C5.08824 6.46326 5.24086 6.40005 5.39999 6.40005C5.55912 6.40005 5.71173 6.46326 5.82425 6.57578C5.93677 6.68831 5.99999 6.84092 5.99999 7.00005V8.00005Z" fill="white" />
                </svg>

                Start Shopping
            </button>
        </div>
    );
};

export default HeroSection;