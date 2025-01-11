import React from "react";
import { Link } from "react-scroll";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

const Logo = ({ className }) => {
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-25}
                            duration={500}
                            className={cn("flex flex-row font-inter font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#222831] dark:text-[#EEEEEE] cursor-pointer hover:scale-110 duration-150", className)}
                        >
                            <h1 className="text-[#76ABAE]">&lt;</h1>
                            JC
                            <h1 className="text-[#76ABAE]">/&gt;</h1>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                        <label className="text-[#EEEEEE]">Home</label>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}

export default Logo;
