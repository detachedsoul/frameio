"use client";

import Image from "next/image";
import Link from "next/link";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";
import ModalWrapper from "@/components/ModalWrapper";
import MobileHeaderLogo from "@/components/MobileHeaderLogo";
import { useState, useEffect, useId } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const Header = (): JSX.Element => {
    const pathname = usePathname();

    const [navIsOpen, setNavIsOpen] = useState(false);
    const [modalIsActive, setModalIsActive] = useState(false);

    const categories = [
        {
            id: useId(),
            categoryName: "T-Shirts",
            route: "/categories/t-shirts"
        },
        {
            id: useId(),
            categoryName: "Tote Bags",
            route: "/categories/tote-bags"
        },
        {
            id: useId(),
            categoryName: "Accessories",
            route: "/categories/accessories"
        },
        {
            id: useId(),
            categoryName: "Featured",
            route: "/categories/featured"
        },
    ];

    useEffect(() => {
        setNavIsOpen(false);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [pathname]);

    useEffect(() => {
        if (modalIsActive) {
        document!.querySelector("body")!.style!.overflow = "hidden";
        } else {
        document!.querySelector("body")!.style!.overflow = "auto";
        }
    }, [modalIsActive]);

    return (
        <header className="flex items-center justify-between gap-4 p-4 pr-8 sticky top-0 bg-white z-50 lg:py-4 lg:px-24 lg:pr-28">
            <button className="rounded-md text-brand-black lg:hidden" type="button" aria-label="Toggle nav bar" onClick={() => setNavIsOpen(!navIsOpen)}>
                {navIsOpen ? (
                    <XIcon strokeWidth={2} size={30} />
                ) : (
                    <MenuIcon strokeWidth={2} size={30} />
                )}
            </button>

            <Link className="hidden lg:block" href="/">
                <Image className="w-full h-3/5" src="/logo.svg" alt="Frameio Stores" width={100} height={100} priority />
            </Link>

            <Link className="lg:hidden" href="/">
                <MobileHeaderLogo />
            </Link>

            <nav className={`absolute bg-white top-full left-0 w-full p-4 shadow transition-transform ease-in-out duration-500 ${navIsOpen ? "translate-y-0" : "-translate-y-[200%]"} lg:shadow-none lg:translate-y-0 lg:static lg:w-auto lg:p-0 lg:bg-transparent`}>
                <ul className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    {categories.map((category): JSX.Element => (
                        <li key={category.id}>
                            <Link className={`p-3 border-l-4 block transition-all ease-linear ${pathname === category.route ? "font-medium bg-brand-light-purple/50 border-brand-purple lg:text-brand-purple" : "border-l-transparent hover:font-medium hover:bg-brand-light-purple/50 hover:border-brand-purple lg:hover:text-brand-purple lg:border-b-transparent"} lg:border-l-0 lg:border-b-2 lg:hover:bg-transparent lg:bg-transparent`} href={category.route}>
                                {category.categoryName}
                            </Link>
                        </li>
                    ))}

                </ul>
            </nav>

            <div className="flex items-center gap-12">
                <button className="relative" type="button" onClick={() => setModalIsActive(true)}>
                    <ShoppingCartIcon />

                    <span className="absolute bg-brand-red text-white -top-1/2 lg:-top-[80%] -right-5 font-medium rounded-full text-xs px-[7px] py-[1.9px] grid place-content-center">
                        3
                    </span>
                </button>
            </div>

            <ModalWrapper isActive={modalIsActive} toggleIsActive={setModalIsActive} />
        </header>
    );
};

export default Header;
