import React, { useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/Button";
import emailjs from '@emailjs/browser';
import { toast, Bounce } from 'react-toastify';

const Contact = () => {
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_SERVER_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    toast.success('Email Sent!', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    console.log('SUCCESS!');

                    // RESET FORM FIELDS
                    form.current.reset();
                },
                (error) => {
                    toast.error('Failed to Send Email!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                    console.log('FAILED...', error.text);

                    // RESET FORM FIELDS
                    form.current.reset();
                },
            );

    };
    return (
        <>
            <div className="bg-[#EEEEEE] dark:bg-[#222831] flex justify-center items-center transition-colors duration-200 h-screen w-full" id="contact">
                <div className="flex flex-col items-center gap-10 md:gap-15 lg:gap-20 px-5 md:px-16 2xl:px-0 m-auto max-w-[1280px]">
                    <div className="flex flex-col items-start gap-1 w-full">
                        <TypeAnimation
                            sequence={[
                                "Let's Get in Touch!",
                                1000,
                                '',
                                500,
                            ]}
                            wrapper='h1'
                            speed={50}
                            className="font-poppins font-bold text-3xl 2xl:text-5xl text-[#222831] dark:text-[#EEEEEE]"
                            repeat={Infinity}
                        />
                        <p className="font-poppins text-[#222831] dark:text-[#EEEEEE] text-sm md:text-md xl:text-lg text-justify">
                            I'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Your thoughts and ideas help me improve every day. Contact me and let's connect!
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between items-center md:px-28 lg:px-0 xl:px-32 gap-5 md:gap-10 w-full">
                        <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                            <div className="flex items-center gap-5">
                                <IoLocationSharp className="text-2xl md:text-3xl lg:text-4xl text-[#222831] dark:text-white" />
                                <label className="text-sm md:text-md lg:text-lg text-[#222831] dark:text-white">Quezon City, Philippines</label>
                            </div>
                            <div className="flex items-center gap-5">
                                <BsFillTelephoneFill className="text-2xl md:text-3xl lg:text-4xl text-[#222831] dark:text-white" />
                                <label className="text-sm md:text-md lg:text-lg text-[#222831] dark:text-white">+63 921 582 0554</label>
                            </div>
                            <div className="flex items-center gap-5">
                                <MdEmail className="text-2xl md:text-3xl lg:text-4xl text-[#222831] dark:text-white" />
                                <label className="text-sm md:text-md lg:text-lg text-[#222831] dark:text-white">jacobe.johncarlo.02022003@gmail.com</label>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="bg-[#222831] dark:bg-[#76ABAE] border-[#222831] ] flex flex-col gap-2 p-8 rounded-md w-full">
                            <div className="flex items-center gap-2 w-full">
                                <Input
                                    type="text"
                                    placeholder="Name"
                                    className="bg-white text-xs md:text-md lg:text-lg border-[#222831] w-full"
                                    name="sender_name"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    className="bg-white text-xs md:text-md lg:text-lg border-[#222831] w-full"
                                    name="sender_email"
                                />
                            </div>
                            <Textarea
                                placeholder="Message"
                                className="bg-white text-xs md:text-md lg:text-lg border-[#222831] h-40 w-full"
                                name="message"
                            />
                            <Button
                                className="bg-[#76ABAE] dark:bg-[#222831] xl:text-lg text-white py-1 px-5 rounded-sm"
                            >
                                Send a Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
