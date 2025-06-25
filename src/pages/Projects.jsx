import React, { useState } from "react";
import { ProjectsData } from "@/data/ProjectsData";
import Modal from "@/components/Modal";
import { IoCloseSharp } from "react-icons/io5";
import { TbSourceCode } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaAward } from "react-icons/fa6";

const Projects = () => {
    const [isOpenProjec, setOpenProject] = useState(false);
    const [isSelectedProject, setSelectedProject] = useState(null);

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setOpenProject(true);
    }

    const closeProjectModal = () => {
        setOpenProject(false);
        setSelectedProject(null);
    }
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center transition-colors duration-200 min-h-screen w-full" id="projects">

                <div className="flex flex-col justify-start items-start gap-12 px-5 md:px-16 2xl:px-0 py-6 m-auto w-[1280px]">

                    <div className="flex flex-col justify-start items-start lg:items-center gap-2 w-full">
                        <h1 className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">Projects</h1>
                        <p className="font-poppins text-xs md:text-md lg:text-lg text-[#222831] dark:text-[#EEEEEE] self-start lg:self-center">My <b className="text-[#222831] dark:text-[#76ABAE]">projects</b> highlight my approach to problem-solving and my ability to develop functional software.</p>
                    </div>

                    {/* PROJECTS */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4 w-full"
                    >
                        {ProjectsData.map((project) => (
                            <div
                                key={project.id}
                                className="bg-[#222831] dark:bg-[#76ABAE] rounded-md p-4 duration-300 hover:scale-105 cursor-pointer"
                                onClick={() => openProjectModal(project)}
                            >
                                <img
                                    src={project.projectImage}
                                    alt={project.projectName}
                                    className="w-full h-60 object-cover"
                                />
                                <h2 className="font-poppins font-semibold text-lg py-4 text-[#EEEEEE] dark:text-[#222831]">
                                    {project.projectName}
                                </h2>
                            </div>
                        ))}
                    </div>

                </div>

                {/* SHOW THE PROJECT */}
                <Modal
                    isOpen={isOpenProjec}
                    onClose={closeProjectModal}
                    className={"p-5"}
                >
                    <div className="relative bg-white p-6 md:p-12 xl:p-24 rounded-md overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 max-h-[96vh] max-w-[1024px] xl:max-w-[1280px]">
                        <IoCloseSharp className="absolute right-0 top-0 m-3 md:m-4 text-lg md:text-3xl cursor-pointer hover:bg-black hover:bg-opacity-10 rounded-full" onClick={closeProjectModal} />
                        {isSelectedProject && (
                            <div className="flex flex-col justify-between items-center gap-5">

                                <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                                    <div className="flex flex-col items-start gap-2">
                                        <h1 className="font-poppins font-semibold text-md xl:text-lg text-[#222831]">{isSelectedProject.projectName}</h1>
                                        <label className="font-poppins text-xs xl:text-sm text-justify">{isSelectedProject.projectDescription}</label>

                                        {/* KEY FEATURES */}
                                        {isSelectedProject.keyFeature && (
                                            <>
                                                <label className="font-poppins font-semibold text-xs xl:text-sm text-justify text-[#76ABAE]">
                                                    Key Features:
                                                </label>
                                                <ol className="font-poppins text-xs xl:text-sm list-decimal list-inside space-y-1">
                                                    {Object.values(isSelectedProject.keyFeature).map((featureSection, index) => (
                                                        <li key={index}>
                                                            <span className="font-semibold">{featureSection[0]}:</span>
                                                            <ul className="list-disc list-inside ml-4">
                                                                {featureSection.slice(1).map((item, subIndex) => (
                                                                    <li key={subIndex}>{item}</li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </>
                                        )}

                                        {/* TECH STACK */}
                                        <label className="font-poppins font-semibold pt-4 text-xs xl:text-sm text-justify text-[#76ABAE]">
                                            Tech Stack:
                                        </label>
                                        {isSelectedProject.techStack && (
                                            <div className="flex flex-col md:flex-row items-start gap-1 md:gap-5 w-full">

                                                {/* FRONTEND */}
                                                {isSelectedProject.techStack.frontend.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <label className="font-poppins font-medium text-xs xl:text-sm">Frontend:</label>
                                                        <div className="flex items-center gap-2 text-2xl text-[#222831]">
                                                            {isSelectedProject.techStack.frontend.map((Icon, index) => (
                                                                <Icon key={index} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* BACKEND */}
                                                {isSelectedProject.techStack.backend.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <label className="font-poppins font-medium text-xs xl:text-sm">Backend:</label>
                                                        <div className="flex items-center gap-2 text-2xl text-[#222831]">
                                                            {isSelectedProject.techStack.backend.map((Icon, index) => (
                                                                <Icon key={index} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* DATABASE */}
                                                {isSelectedProject.techStack.database.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <label className="font-poppins font-medium text-xs xl:text-sm">Database:</label>
                                                        <div className="flex items-center gap-2 text-2xl text-[#222831]">
                                                            {isSelectedProject.techStack.database.map((Icon, index) => (
                                                                <Icon key={index} />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                        )}

                                        {/* URLs */}
                                        <label className="font-poppins font-semibold pt-4 text-xs xl:text-sm text-justify text-[#76ABAE]">
                                            Source Code:
                                        </label>
                                        <div className="flex flex-col md:flex-row items-start gap-1 md:gap-5 w-full">
                                            {/* FRONTEND */}
                                            {isSelectedProject?.urls?.frontendUrl && (
                                                <div className="flex items-center gap-2">
                                                    <label className="font-poppins font-medium text-xs xl:text-sm">Frontend:</label>
                                                    <Link
                                                        to={isSelectedProject.urls.frontendUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-2xl text-[#222831] hover:text-[#76ABAE] transition-colors"
                                                        title="Go To Frontend Source Code"
                                                    >
                                                        <TbSourceCode />
                                                    </Link>
                                                </div>
                                            )}

                                            {/* BACKEND */}
                                            {isSelectedProject?.urls?.backendUrl && (
                                                <div className="flex items-center gap-2">
                                                    <label className="font-poppins font-medium text-xs xl:text-sm">Backend:</label>
                                                    <Link
                                                        to={isSelectedProject.urls.backendUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-2xl text-[#222831] hover:text-[#76ABAE] transition-colors"
                                                        title="Go To Frontend Source Code"
                                                    >
                                                        <TbSourceCode />
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* AWARDS */}
                                        {isSelectedProject?.awards && (
                                            <>
                                                <label className="font-poppins font-semibold pt-4 text-xs xl:text-sm text-justify text-[#76ABAE]">
                                                    Awards:
                                                </label>
                                                <div className="flex flex-col items-start w-full">
                                                    {/* 1ST AWARD */}
                                                    {isSelectedProject?.awards?.bestResearchPaperAward && (
                                                        <div className="flex items-center gap-1">
                                                            <FaAward />
                                                            <label className="font-poppins font-medium text-xs xl:text-sm">{isSelectedProject.awards.bestResearchPaperAward}</label>
                                                        </div>
                                                    )}

                                                    {/* 2ND AWARD */}
                                                    {isSelectedProject?.awards?.capstoneOfTheYearAward && (
                                                        <div className="flex items-center gap-1">
                                                            <FaAward />
                                                            <label className="font-poppins font-medium text-xs xl:text-sm">{isSelectedProject.awards.capstoneOfTheYearAward}</label>
                                                        </div>
                                                    )}

                                                    {/* 3RD AWARD */}
                                                    {isSelectedProject?.awards?.programmerOfTheYearAward && (
                                                        <div className="flex items-center gap-1">
                                                            <FaAward />
                                                            <label className="font-poppins font-medium text-xs xl:text-sm">{isSelectedProject.awards.programmerOfTheYearAward}</label>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}

                                    </div>
                                    <img
                                        src={isSelectedProject.projectImage}
                                        alt={isSelectedProject.projectName}
                                        className="w-full h-[280px] md:h-[360px] xl:h-[480px] object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </Modal>

            </div>
        </>
    )
}

export default Projects;
