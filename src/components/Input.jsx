import React from "react";
import { cn } from "@/lib/utils";

const Input = ({ type, placeholder, onChange, className }) => {
    return (
        <>
            <input
                className={cn("font-poppins text-xs md:text-md lg:text-lg py-1 pl-1 w-full", className)}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    )
}

export default Input;
