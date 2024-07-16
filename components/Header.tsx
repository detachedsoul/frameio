"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LayoutDashboardIcon, XIcon } from "lucide-react";

const Header = (): JSX.Element => {
    const [navIsOpen, setNavIsOpen] = useState(false);

    return (
        <header className="flex items-center justify-between gap-4 py-7 px-8 sticky top-0 bg-white lg:px-24">
            <Link href="/">
                <Image className="w-full h-3/5" src="/logo.svg" alt="Frameio" width={100} height={100} />
            </Link>

            <nav className="absolute hidden bg-slate-50 top-full left-0 w-full p-4 lg:static lg:w-auto lg:p-0 lg:bg-transparent">
                <ul className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    <li>
                        <Link className="p-3 border-l-4 block border-l-transparent  transition-all ease-linear hover:font-medium hover:bg-brand-blue/10 hover:border-brand-blue lg:hover:text-brand-blue lg:border-l-0 lg:border-b-2 lg:border-b-transparent lg:hover:bg-transparent" href="/categories/t-shirt">
                            T-Shirts
                        </Link>
                    </li>

                    <li>
                        <Link className="p-3 border-l-4 block border-l-transparent  transition-all ease-linear hover:font-medium hover:bg-brand-blue/10 hover:border-brand-blue lg:hover:text-brand-blue lg:border-l-0 lg:border-b-2 lg:border-b-transparent lg:hover:bg-transparent" href="/categories/tote-bags">
                            Tote Bags
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-12">
                <Link className="relative" href="/cart">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.19998 6.0002V7.20019H5.60038C5.07508 7.20031 4.5689 7.39729 4.1817 7.75228C3.7945 8.10727 3.55441 8.59448 3.50878 9.11779L2.51758 20.5178C2.4923 20.8077 2.52756 21.0997 2.62111 21.3753C2.71466 21.6508 2.86446 21.9039 3.06101 22.1186C3.25756 22.3332 3.49657 22.5046 3.76288 22.6219C4.02918 22.7393 4.31697 22.8 4.60798 22.8002H19.392C19.6831 22.8001 19.971 22.7395 20.2375 22.6223C20.5039 22.505 20.7431 22.3336 20.9397 22.119C21.1364 21.9044 21.2863 21.6512 21.38 21.3756C21.4736 21.0999 21.5089 20.8078 21.4836 20.5178L20.4924 9.11779C20.4467 8.59427 20.2065 8.10689 19.819 7.75188C19.4316 7.39686 18.9251 7.20001 18.3996 7.20019H16.8V6.0002C16.8 4.72716 16.2943 3.50626 15.3941 2.60608C14.4939 1.70591 13.273 1.2002 12 1.2002C10.7269 1.2002 9.50604 1.70591 8.60587 2.60608C7.70569 3.50626 7.19998 4.72716 7.19998 6.0002ZM12 3.0002C11.2043 3.0002 10.4413 3.31627 9.87866 3.87887C9.31605 4.44148 8.99998 5.20455 8.99998 6.0002V7.20019H15V6.0002C15 5.20455 14.6839 4.44148 14.1213 3.87887C13.5587 3.31627 12.7956 3.0002 12 3.0002ZM8.99998 12.0002C8.99998 12.7958 9.31605 13.5589 9.87866 14.1215C10.4413 14.6841 11.2043 15.0002 12 15.0002C12.7956 15.0002 13.5587 14.6841 14.1213 14.1215C14.6839 13.5589 15 12.7958 15 12.0002V10.5002C15 10.2615 15.0948 10.0326 15.2636 9.8638C15.4324 9.69502 15.6613 9.60019 15.9 9.60019C16.1387 9.60019 16.3676 9.69502 16.5364 9.8638C16.7052 10.0326 16.8 10.2615 16.8 10.5002V12.0002C16.8 13.2732 16.2943 14.4941 15.3941 15.3943C14.4939 16.2945 13.273 16.8002 12 16.8002C10.7269 16.8002 9.50604 16.2945 8.60587 15.3943C7.70569 14.4941 7.19998 13.2732 7.19998 12.0002V10.5002C7.19998 10.2615 7.2948 10.0326 7.46358 9.8638C7.63237 9.69502 7.86129 9.60019 8.09998 9.60019C8.33868 9.60019 8.56759 9.69502 8.73638 9.8638C8.90516 10.0326 8.99998 10.2615 8.99998 10.5002V12.0002Z" fill="#3861FB" />
                    </svg>

                    <span className="absolute bg-brand-red text-white -top-[90%] -right-4 font-medium rounded-full text-xs px-1.5 py-0.5">
                        3
                    </span>
                </Link>

                <button className="bg-brand-blue/10 rounded-md p-2.5 text-brand-blue lg:hidden" type="button">
                    <LayoutDashboardIcon strokeWidth={1} />
                </button>
            </div>
        </header>
    );
};

export default Header;
