import React, { useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { Link } from "react-scroll";
import SwitchThemeButton from "@/components/SwitchThemeButton";

const NavigationBar = ({ switchTheme }) => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <>
            <header
                className="backdrop-blur-sm fixed px-[5%] top-0 w-full"
            >
                <nav
                    className="flex justify-between items-center m-auto py-5 max-w-[1280px]"
                >
                    <Logo />
                    <Button
                        className="flex justify-end lg:hidden text-2xl text-[#222831] dark:text-[#EEEEEE] w-full"
                        onClick={handleMenu}
                    >
                        {menu ? <IoCloseSharp /> : <GiHamburgerMenu />}
                    </Button>
                    <ul className="hidden lg:flex flex-row items-center gap-[3rem]">
                        <li className="font-inter text-xl text-[#222831] dark:text-[#EEEEEE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-xl text-[#76ABAE] dark:text-[#76ABAE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer"}
                                to={"about"}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="font-inter text-xl text-[#222831] dark:text-[#EEEEEE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-xl text-[#76ABAE] dark:text-[#76ABAE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer"}
                                to={"skills"}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="font-inter text-xl text-[#222831] dark:text-[#EEEEEE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-xl text-[#76ABAE] dark:text-[#76ABAE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer"}
                                to={"projects"}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="font-inter text-xl text-[#222831] dark:text-[#EEEEEE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-xl text-[#76ABAE] dark:text-[#76ABAE] hover:text-[#76ABAE] dark:hover:text-[#76ABAE] cursor-pointer"}
                                to={"contact"}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <SocialMediaLinks />
                        </li>
                    </ul>
                    <SwitchThemeButton className="hidden lg:flex" switchTheme={switchTheme} />
                </nav>

                {/* Mobile Menu Links */}
                {menu ? (
                    <ul className="flex lg:hidden flex-col gap-[25px] py-[25px]">
                        <li className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE] pl-[.5rem]">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-[1.5rem] text-[#76ABAE] dark:text-[#76ABAE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"}
                                to={"about"} spy={true} smooth={true} offset={-30} duration={500}
                                onClick={handleMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE] pl-[.5rem]">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-[1.5rem] text-[#76ABAE] dark:text-[#76ABAE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"}
                                to={"skills"} spy={true} smooth={true} duration={500}
                                onClick={handleMenu}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE] pl-[.5rem]">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-[1.5rem] text-[#76ABAE] dark:text-[#76ABAE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"}
                                to="projects" spy={true} smooth={true} duration={500}
                                onClick={handleMenu}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="font-inter text-[1.5rem] text-[#222831] dark:text-[#EEEEEE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE] pl-[.5rem]">
                            <Link
                                className={({ isActive }) => isActive ? null : "font-inter text-[1.5rem] text-[#76ABAE] dark:text-[#76ABAE] cursor-pointer hover:text-[#76ABAE] dark:hover:text-[#76ABAE]"}
                                to={"contact"} spy={true} smooth={true} duration={500}
                                onClick={handleMenu}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="flex flex-row gap-[1rem] pl-[.5rem]">
                            <SocialMediaLinks />
                            <SwitchThemeButton switchTheme={switchTheme} />
                        </li>
                    </ul>
                ) : <nav></nav>}
            </header>
        </>
    )
}

export default NavigationBar;
