"use client";
import { navListItem } from "@/data/dummy";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavList() {
    const activeSegment =
        useSelectedLayoutSegment();
    return (
        <>
            {navListItem.map(
                (item, index) => (
                    <Typography
                        as="li"
                        variant="small"
                        className="p-1 font-medium !font-poppins !text-white"
                        key={index}
                    >
                        <Link
                            href={
                                item.href
                            }
                            className={`flex items-center  ${
                                activeSegment ==
                                item.active
                                    ? "after:w-8 "
                                    : "after:w-0 hover:after:w-8 "
                            } after:h-[3px] after:bg-secondary after:absolute relative after:-bottom-1 after:transition-all after:duration-300 `}
                        >
                            {item.title}
                        </Link>
                    </Typography>
                )
            )}
        </>
    );
}
