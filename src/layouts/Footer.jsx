import { cn } from "@/lib/utils";
import { yearToday } from "@/utilities/yearToday";
import React from "react";

const Footer = ({ className }) => {
    const year = yearToday();
    return (
        <>
            <footer className={cn("bg-[#76ABAE] bottom-0 flex flex-col items-center w-full py-[24px]", className)}>
                <p className="font-poppins font-semibold text-sm md:text-md lg:text-lg text-[#EEEEEE]">Developer: John Carlo P. Jacobe</p>
                <p className="font-poppins text-xs text-[#EEEEEE]">Copyright &copy; {year} | All Rights Reserved.</p>
            </footer>
        </>
    )
}

export default Footer;
