"use client";
import { useEffect, useState } from "react";
import { Navbar as Nav, Typography, IconButton, Collapse } from "@material-tailwind/react";
import Image from "next/image";
import NavList from "@/components/NavList";
import useScrollStatus from "@/hooks/useScrollStatus";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Navbar() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const isScrolled = useScrollStatus();

    return (
        <>
            <Nav
                className={`top fixed z-30 h-max max-w-full rounded-none border-0 bg-primary/80 px-4 py-2 backdrop-blur-lg transition-colors delay-100 duration-300 md:delay-0 lg:px-24 lg:py-4`}
                color={isScrolled ? "gray" : "transparent"}
            >
                <div className="flex items-center justify-between">
                    <Typography
                        as="a"
                        href="/"
                        className="mr-4 flex cursor-pointer items-center gap-4 py-1.5 !font-poppins text-xl font-semibold"
                    >
                        <Image
                            src={"/logopmii.png"}
                            width={35}
                            height={35}
                            alt="Logo PMII"
                            className="h-[35px] w-[35px]"
                        />
                        Media Pergerakan
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">
                            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                                <NavList />
                            </ul>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <NavList />
                    </ul>
                </Collapse>
            </Nav>
        </>
    );
}
