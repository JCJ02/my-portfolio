import React, { useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const SwitchThemeButton = ({ switchTheme, className }) => {
    const [theme, setTheme] = useState(false);

    const handleTheme = () => {
        setTheme(!theme);
        switchTheme();
    }
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <div className={className}>
                            <button
                                className="bg-[#222831] text-[#EEEEEE] dark:bg-[#EEEEEE] dark:text-[#222831] text-lg p-2 rounded-full"
                                onClick={handleTheme}
                            >
                                {theme ? <MdLightMode /> : <MdDarkMode />}
                            </button>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        {theme ? (
                            <label className="text-[#EEEEEE]">Light Mode</label>
                        ) : (
                            <label className="text-[#EEEEEE]">Dark Mode</label>
                        )}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}

export default SwitchThemeButton;
