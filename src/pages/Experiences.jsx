import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import React from 'react';
import { FaNode, FaPython, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiFastapi, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Experiences = () => {
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex flex-col justify-center items-center gap-5 transition-colors duration-200 min-h-screen w-full" id="experiences">
                <h1 className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE]">Experiences</h1>

                <div className="flex flex-col justify-start items-start gap-12 px-5 md:px-16 2xl:px-0 py-6 mx-auto max-w-[1280px]">

                    {/* 1st EXPERIENCE */}
                    <div className="flex justify-center items-start gap-5 w-full">
                        <div className="bg-[#222831] dark:bg-[#EEEEEE] flex justify-center items-center h-6 w-6 md:h-12 md:w-12 rounded-full">
                            <h1 className="font-poppins text-xs md:text-md lg:text-lg text-[#EEEEEE] dark:text-[#222831] font-bold text-center">1</h1>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-2 w-full">
                            <div className="flex flex-col justify-center items-start w-full">
                                <h1 className="font-poppins font-bold text-sm md:text-md xl:text-lg text-[#222831] dark:text-[#EEEEEE]">September 2024 - February 2025</h1>
                                <label className="font-poppins text-xs md:text-md xl:text-lg text-justify dark:text-[#EEEEEE]">
                                    <Link className="text-[#76ABAE] font-bold hover:underline" to={"https://lightweightsolutions.co/"} target="_blank">Lightweight Solutions</Link> | Quezon City, Philippines
                                </label>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-2 pl-5 w-full">

                                {/* 3rd POSITION */}
                                {/* <div className="flex flex-col justify-center items-start w-full">
                                <div className="flex flex-col justify-center items-start w-full">
                                    <h1 className="font-poppins font-bold text-sm md:text-md xl:text-lg text-[#222831] dark:text-[#EEEEEE]">April 2025 - Present</h1>
                                    <label className="font-poppins text-xs md:text-md xl:text-lg text-justify italic dark:text-[#EEEEEE]">Junior Software Engineer - Employee</label>
                                </div>
                                <li className="text-[#222831] dark:text-[#EEEEEE]">
                                    <label className="font-poppins text-sm md:text-md xl:text-lg text-justify dark:text-[#EEEEEE] py-2">Implemented frontend using React and Next.js for seamless API integration and user-friendly interface.</label>
                                </li>
                            </div> */}

                                {/* 2nd POSITION */}
                                <div className="flex flex-col justify-center items-start w-full">
                                    <div className="flex flex-col justify-center items-start w-full">
                                        <h1 className="font-poppins font-bold text-sm md:text-md xl:text-lg text-[#222831] dark:text-[#EEEEEE]">Frontend Developer - Intern</h1>
                                        <label className="font-poppins text-xs md:text-md xl:text-lg text-justify italic dark:text-[#EEEEEE]">November 2024 - February 2025</label>
                                    </div>
                                    <li className="text-[#222831] dark:text-[#EEEEEE]">
                                        <label className="font-poppins text-sm md:text-md xl:text-lg text-justify dark:text-[#EEEEEE] py-2">Implemented frontend using React and Next.js for seamless API integration and user-friendly interface.</label>
                                    </li>
                                </div>

                                {/* 1st POSITION */}
                                <div className="flex flex-col justify-center items-start w-full">
                                    <div className="flex flex-col justify-center items-start w-full">
                                        <h1 className="font-poppins font-bold text-sm md:text-md xl:text-lg text-[#222831] dark:text-[#EEEEEE]">Backend Developer - Intern</h1>
                                        <label className="font-poppins text-xs md:text-md xl:text-lg text-justify italic dark:text-[#EEEEEE]">September 2024 - February 2025</label>
                                    </div>
                                    <li className="text-[#222831] dark:text-[#EEEEEE]">
                                        <label className="font-poppins text-sm md:text-md xl:text-lg text-justify dark:text-[#EEEEEE] py-2">Developed RESTful APIs using Node.js (Express.js) and Python (FastAPI). Proficient in leveraging Prisma ORM and SQLAlchemy ORM for efficient database integration across PostgreSQL, MySQL, MSSQL, and MongoDB. Expanding skills in AI development with Python.</label>
                                    </li>
                                </div>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(24px,1fr))] gap-4 py-2 w-full">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <FaReact className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">React.js</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <SiNextdotjs className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">Next.js</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <RiTailwindCssFill className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">Tailwind CSS</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <FaNode className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">Node.js</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <SiExpress className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">Express.js</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <SiFastapi className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">FastAPI</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <IoLogoJavascript className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">JavaScript</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <SiTypescript className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">TypeScript</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <FaPython className="text-3xl text-[#222831] dark:text-[#EEEEEE]" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <label className="text-[#EEEEEE]">Python</label>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Experiences
