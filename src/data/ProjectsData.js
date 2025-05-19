import projectOne from "../assets/images/POWERWALK-web-app.png";
import projectTwo from "../assets/images/lws-invoice-app.png";
import { techIcons } from "@/utilities/techIcons";

export const ProjectsData = [
    {
        id: 1,
        projectName: "POWERWALK Web Application",
        projectDescription: "The main objective of the capstone project is to develop “POWERWALK”: Converting Foot Traffic into Sustainable Energy, Utilizing Piezoelectric Transducers with RFID and Data Visualization for Efficient Power Generation.",
        projectImage: projectOne,
        keyFeature: {
            featureOne: [
                "Admin Account",
                "Secure login for administrators to manage system functoins."
            ],
            featureTwo: [
                "Dashboard",
                "Monitor battery percentage.",
                "Track total electricity generated and consumed."
            ],
            featureThree: [
                "Data Visualization",
                "Daily Usage Chart: Displays the number of students who used the POWERWALK charging station.",
                "Electricity Meter Chart: Shows daily electricity generation and consumption.",
                "Report Generation: Filter by date to generate reports on electricity usage, student activity, and overall summaries."
            ],
            featureFour: [
                "RFID Integration",
                "Register RFID (School ID): Only users with registered RFID cards can access and use the POWERWALK charging station."
            ]
        },
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
            frontendUrl: "https://github.com/JCJ02/power-walk-fe",
            backendUrl: "https://github.com/JCJ02/power-walk-api",
            demoUrl: ""
        }
    },
    {
        id: 2,
        projectName: "LWS Invoice Web Application",
        projectDescription: "",
        projectImage: projectTwo,
        keyFeature: {
            featureOne: [
                "Admin Account",
                "Secure login for administrators to manage system functionalities."
            ],
            featureTwo: [
                "Client Management",
                "Create, read, update, and delete client information.",
            ],
            featureThree: [
                "Invoice Management",
                "Create, read, update, and delete client invoices.",
                "Automatically calculate overdue amounts, draft totals, and overall invoice totals.",
            ],
            featureFour: [
                "Recurring Invoices",
                "Automate invoice creation on a recurring schedule.",
                "Generate receipts for client invoices."
            ]
        },
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
            frontendUrl: "https://github.com/JCJ02/invoice-fe",
            backendUrl: "https://github.com/JCJ02/invoice-api",
            demoUrl: ""
        }
    }
]