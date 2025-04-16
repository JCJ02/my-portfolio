import React from "react";
import { Link } from "react-router-dom";
import PNF from "../assets/images/page-not-found.png";
import Footer from "@/layouts/Footer";

const NotFound = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-5 px-5 2xl:px-0 h-[85vh] m-auto min-h-screen max-w-[1280px]">
                <img
                    className="w-[280px] md:w-[360px] lg:w-[480px]"
                    src={PNF}
                />
                <div className="flex flex-col items-center lg:items-start w-full">
                    <h1 className="font-poppins font-bold text-5xl text-center py-5">Page Not Found</h1>
                    <p className="font-poppins text-sm md:text-md lg:text-lg text-justify">Oops! The page you're looking for doesn't exist. It might have been moved or deleted, or you may have mistyped the URL. Head back to the <Link to={"/"} className="text-[#76ABAE] text-lg font-bold cursor-pointer">Home Page</Link> to find what you need.</p>
                </div>
            </div>
            <Footer className={"fixed"} />
        </>
    )
}

export default NotFound;
