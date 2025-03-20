import React from "react";
import { TypeAnimation } from "react-type-animation";
import resume from "../assets/Resume_Jacobe_John_Carlo.pdf";
import PFP from "../assets/images/PFP.jpg";
import Button from "@/components/Button";

const Home = () => {
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center h-screen w-full transition-colors duration-200" id="home">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-8 xl:gap-24 m-auto max-w-[1280px] px-5 md:px-16 2xl:px-0">
                    <img className="h-[144px] w-[144px] md:h-[360px] md:w-[360px] xl:h-[480px] xl:w-[480px] rounded-full hover:border-4 lg:hover:border-8 border-[#222831] dark:border-[#EEEEEE] ease-in-out duration-150" src={PFP}></img>
                    <div className="flex flex-col items-center gap-4 lg:gap-5">
                        <TypeAnimation
                            sequence={[
                                "Hey! I'm JC Jacobe, 22 years old.",
                                1000,
                                '',
                                500,
                                'Full-Stack Developer',
                                1000,
                            ]}
                            wrapper='h1'
                            speed={50}
                            className='font-poppins font-extrabold text-xl md:text-2xl lg:text-3xl text-[#222831] dark:text-[#76ABAE] text-center'
                            repeat={Infinity}
                        />
                        <p className="font-poppins text-[#222831] dark:text-[#EEEEEE] text-sm md:text-md xl:text-lg text-justify">
                            I specialize in building dynamic web applications using <b className="text-[#76ABAE]">React.js, Next.js</b>, and <b className="text-[#76ABAE]">Node.js (Express.js)</b> with experience in <b className="text-[#76ABAE]">MySQL</b>, <b className="text-[#76ABAE]">PostgreSQL</b>, <b className="text-[#76ABAE]">MSSQL</b>, and <b className="text-[#76ABAE]">MongoDB</b>, I focus on creating scalable, secure, and high-performance applications across frontend and backend.
                        </p>
                        <a
                            href={resume}
                            download={"Resume_Jacobe_John_Carlo"}
                            target="_blank"
                        >
                            <Button
                                className="bg-[#76ABAE] text-white py-2 px-5 duration-300 ease-in-out hover:scale-110 rounded-full"
                            >
                                Download Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
