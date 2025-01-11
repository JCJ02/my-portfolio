import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ children, className, onClick }) => {
    return (
        <>
            <button
                className={cn(
                    "font-poppins text-[#222831] dark:text-[#EEEEEE] text-sm md:text-md lg:text-lg py-1 rounded-md",
                    className
                )}
                onClick={onClick}
            >
                {children}
            </button>
        </>
    )
}

export default Button;
