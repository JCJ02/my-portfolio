import React from "react";

const Projects = () => {
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center transition-colors duration-200 min-h-screen w-full" id="projects">

                <div className="flex flex-col justify-between items-center gap-5 m-auto py-5 max-w-[1280px]">

                    <div className="flex flex-col justify-start items-start lg:items-center gap-2 w-full">
                        <h1 className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">Projects</h1>
                        <p className="font-poppins text-xs md:text-md lg:text-lg text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">My <b className="text-[#222831] dark:text-[#76ABAE]">projects</b> highlight my approach to problem-solving and my ability to develop functional software.</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Projects;
