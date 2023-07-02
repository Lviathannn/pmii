"use client";
import { Button as Btn } from "@material-tailwind/react";

export default function Button({
    text,
    icon,
}) {
    return (
        <Btn className="flex items-center gap-3 bg-secondary !font-poppins font-medium text-primary">
            {icon}
            {text}
        </Btn>
    );
}
