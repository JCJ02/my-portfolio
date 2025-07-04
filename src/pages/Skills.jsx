import React from "react";
import { techIcons } from "@/utilities/techIcons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Devicon from "@/components/Devicon";

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
                                                {React.createElement(techIcons.languages[0], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">HTML5</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.languages[1], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">CSS3</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.languages[2], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">JavaScript</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.languages[3], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">TypeScript</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.languages[4], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Python</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {typeof techIcons.languages[5] === "string" ? (
                                                    <Devicon name={techIcons.languages[5]} className={"text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"} />
                                                ) : (
                                                    React.createElement(techIcons.languages[5], {
                                                        className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                    })
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">C#</label>
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
                                                {React.createElement(techIcons.frontend[0], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">React.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.frontend[1], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Next.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.frontend[2], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Tailwind CSS</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.backend[0], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Node.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.backend[1], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Express.js</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.backend[2], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">FastAPI</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {typeof techIcons.backend[3] === "string" ? (
                                                    <Devicon name={techIcons.backend[3]} className={"text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"} />
                                                ) : (
                                                    React.createElement(techIcons.backend[3], {
                                                        className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                    })
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">ASP.NET Core Web API</label>
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
                                                {React.createElement(techIcons.database[0], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">MySQL</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.database[1], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">PostgreSQL</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {typeof techIcons.database[2] === "string" ? (
                                                    <Devicon name={techIcons.database[2]} className={"text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"} />
                                                ) : (
                                                    React.createElement(techIcons.database[2], {
                                                        className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                    })
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Microsoft SQL Server</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.database[3], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
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
                                                {React.createElement(techIcons.tools[0], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Git</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.tools[1], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">GitHub</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.tools[2], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Postman</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.tools[3], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Swagger</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.tools[4], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Visual Studio Code</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {typeof techIcons.tools[5] === "string" ? (
                                                    <Devicon name={techIcons.tools[5]} className={"text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"} />
                                                ) : (
                                                    React.createElement(techIcons.tools[5], {
                                                        className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                    })
                                                )}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <label className="text-[#EEEEEE]">Microsoft SQL Server</label>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                {React.createElement(techIcons.tools[6], {
                                                    className: "text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl text-[#222831] dark:text-[#EEEEEE]"
                                                })}
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
