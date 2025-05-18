import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiSwagger } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Skills = () => {
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center transition-colors duration-200 min-h-screen w-full" id="skills">

                <div className="flex flex-col justify-between items-center gap-5 px-5 md:px-16 2xl:px-0 py-6 m-auto w-[1280px]">

                    <div className="flex flex-col justify-start items-start lg:items-center gap-2 w-full">
                        <h1 className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">Skills</h1>
                        <p className="font-poppins text-xs md:text-md lg:text-lg text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center"><b className="text-[#222831] dark:text-[#76ABAE]">Technologies</b> I use for development</p>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5 md:gap-10 lg:gap-15 xl:gap-20 py-5 w-full">

                        <div className="flex flex-col items-center gap-5 md:gap-10 lg:gap-15 xl:gap-20 w-full">
                            <div className="flex flex-col items-start gap-5 w-full">
                                <h1 className="font-poppins text-sm md:text-md lg:text-lg text-[#76ABAE]">Programming Languages</h1>
                                <div className="flex items-center gap-5 w-full">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaHtml5 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">HTML5</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaCss3Alt className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">CSS3</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <IoLogoJavascript className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">JavaScript</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiTypescript className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">TypeScript</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaPython className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Python</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-5 w-full">
                                <h1 className="font-poppins text-sm md:text-md lg:text-lg text-[#76ABAE]">Frameworks/Libraries</h1>
                                <div className="flex items-center gap-5 w-full">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaReact className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">React.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiNextdotjs className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Next.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <RiTailwindCssFill className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Tailwind CSS</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaNode className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Node.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiExpress className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Express.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiFastapi className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">FastAPI</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-5 md:gap-10 lg:gap-15 xl:gap-20 w-full">
                            <div className="flex flex-col items-start gap-5 w-full">
                                <h1 className="font-poppins text-sm md:text-md lg:text-lg text-[#76ABAE]">Databases</h1>
                                <div className="flex items-center gap-5 w-full">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiMysql className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">MySQL</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <BiLogoPostgresql className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">PostgreSQL</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiMongodb className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">MongoDB</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-5 w-full">
                                <h1 className="font-poppins text-sm md:text-md lg:text-lg text-[#76ABAE]">Tools</h1>
                                <div className="flex items-center gap-5 w-full">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaGitAlt className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Git</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiPostman className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Postman</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <VscVscode className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">VSCode</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <FaGithub className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">GitHub</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiSwagger className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Swagger</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <SiPrisma className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Prisma</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills;
