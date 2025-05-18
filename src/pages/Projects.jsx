import React from "react";
import { ProjectsData } from "@/data/ProjectsData";

const Projects = () => {
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center transition-colors duration-200 min-h-screen w-full" id="projects">

                <div className="flex flex-col justify-start items-start gap-12 px-5 md:px-16 2xl:px-0 py-6 m-auto w-[1280px]">

                    <div className="flex flex-col justify-start items-start lg:items-center gap-2 w-full">
                        <h1 className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">Projects</h1>
                        <p className="font-poppins text-xs md:text-md lg:text-lg text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">My <b className="text-[#222831] dark:text-[#76ABAE]">projects</b> highlight my approach to problem-solving and my ability to develop functional software.</p>
                    </div>

                    {/* PROJECTS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 w-full">
                        {ProjectsData.map((project) => (
                            <div key={project.id} className="bg-[#222831] dark:bg-[#76ABAE] rounded-md p-4 duration-300 hover:scale-105 cursor-pointer">
                                <img src={project.projectImage} alt={project.projectName} className="w-full h-60 object-cover" />
                                <h2 className="font-poppins font-semibold text-lg py-4 text-[#EEEEEE] dark:text-[#222831]">
                                    {project.projectName}
                                </h2>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Projects;
