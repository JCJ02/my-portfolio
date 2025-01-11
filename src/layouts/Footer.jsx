import { cn } from "@/lib/utils";
import React from "react";

const Footer = ({ className }) => {
    return (
        <>
            <footer className={cn("bg-[#76ABAE] bottom-0 flex flex-col items-center w-full py-[24px]", className)}>
                <p className="font-poppins font-semibold text-sm md:text-md lg:text-lg text-[#EEEEEE]">Developer: John Carlo P. Jacobe</p>
                <p className="font-poppins text-xs text-[#EEEEEE]">Copyright &copy; 2024 | All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer;
