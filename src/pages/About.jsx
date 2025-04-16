import React from "react";
import LWS from "../assets/images/LWS.jpg";

const About = () => {
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center transition-colors duration-200 min-h-screen w-full]" id="about">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-20 px-5 md:px-16 2xl:px-0 m-auto max-w-[1280px]">
                    <div className="flex flex-col justify-center items-start w-full">
                        <h1 className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE]">About</h1>
                        <p className="font-poppins text-xs md:text-md xl:text-lg text-justify dark:text-[#EEEEEE] py-2 xl:py-5">
                            Hi, I'm John Carlo P. Jacobe, a 22-year-old <b className="text-[#222831] dark:text-[#76ABAE]">Bachelor of Science in Information Technology</b> graduate in <b className="text-[#222831] dark:text-[#76ABAE]">Quezon City University</b>. I'm a developer skilled in frontend, backend, and full-stack development.
                        </p>
                        <p className="font-poppins text-xs md:text-md xl:text-lg text-justify dark:text-[#EEEEEE] py-2 xl:py-5">
                            I thrive on collaborating with other developers, constantly learning, and improving my skills to deliver innovative solutions.
                        </p>
                        <p className="font-poppins text-xs md:text-md xl:text-lg text-justify dark:text-[#EEEEEE] py-2 xl:py-5">
                            <b className="text-[#222831] dark:text-[#76ABAE]">My ultimate goal</b> is to become a Senior Software Engineer and establish a software development company that empowers businesses through technology. With a passion for growth and problem-solving, I'm committed to making a meaningful impact in the IT industry.
                        </p>
                    </div>
                    <img
                        src={LWS}
                        className="shadow-dark dark:shadow-light border-8 border-[#76ABAE] dark:border-[#EEEEEE] w-[280px] md:w-[360px] xl:w-[480px] h-[280px] md:h-[360px] xl:h-[480px]"
                    />
                </div>
            </div>
        </>
    )
}

export default About;
