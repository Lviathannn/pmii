"use client";
import { Link } from "react-scroll";

export default function Button({ text, icon, target }) {
    return (
        <Link to={target} smooth={true} offset={-100}>
            <button className="flex items-center justify-center gap-3 rounded-md bg-tertiary px-5 py-2 font-medium text-white transition-all hover:scale-105 hover:shadow-md ">
                {icon}
                {text}
            </button>
        </Link>
    );
}
