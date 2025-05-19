import projectOne from "../assets/images/POWERWALK-web-app.png";
import projectTwo from "../assets/images/lws-invoice-app.png";
import { techIcons } from "@/utilities/techIcons";

export const ProjectsData = [
    {
        id: 1,
        projectName: "POWERWALK Web Application",
        projectDescription: "",
        projectImage: projectOne,
        keyFeature: "",
        techStack: {
            frontend: [
                techIcons.languages[3],
                techIcons.frontend[0],
                techIcons.frontend[2]
            ],
            backend: [
                techIcons.languages[3],
                techIcons.backend[0],
                techIcons.backend[1]
            ],
            database: [
                techIcons.database[0]
            ]
        },
        urls: {
            frontendUrl: "",
            backendUrl: "",
            demoUrl: ""
        }
    },
    {
        id: 2,
        projectName: "LWS Invoice Web Application",
        projectDescription: "",
        projectImage: projectTwo,
        keyFeatures: "",
        techStack: {
            frontend: [
                techIcons.languages[3],
                techIcons.frontend[1],
                techIcons.frontend[2]
            ],
            backend: [
                techIcons.languages[3],
                techIcons.backend[0],
                techIcons.backend[1]
            ],
            database: [
                techIcons.database[1]
            ]
        },
        urls: {
            frontendUrl: "",
            backendUrl: "",
            demoUrl: ""
        }
    }
]