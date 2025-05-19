import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaGitAlt, FaGithub, FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiNextdotjs, SiExpress, SiPrisma, SiPostman, SiSwagger, SiMysql, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiFastapi } from "react-icons/si";

export const techIcons = {
    languages: [
        FaHtml5,
        FaCss3Alt,
        IoLogoJavascript,
        SiTypescript,
        FaPython
    ],
    frontend: [
        FaReact,
        SiNextdotjs,
        RiTailwindCssFill
    ],
    backend: [
        FaNode,
        SiExpress,
        SiFastapi,
    ],
    database: [
        SiMysql,
        BiLogoPostgresql,
        SiMongodb
    ],
    tools: [
        FaGitAlt,
        FaGithub,
        SiPostman,
        SiSwagger,
        VscVscode,
        SiPrisma
    ],
};
