import { meta, shopify, starbucks, tesla, tensorblue, mytravaly } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    cpp,
    eth,
    firebase,
    w3js,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Programming",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: eth,
        name: "Ethereum",
        type: "Blockchain",
    },
    {
        imageUrl: w3js,
        name: "Web3js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "MERN Developer Intern",
        company_name: "Tensorblue",
        icon: tensorblue,
        iconBg: "#FAF9F6",
        date: "December 2023 - July 2024",
        points: [
            "Developing and maintaining web applications using MERN technology.",
            "Solving different and intricate problems with the team, and an exposure to Generative AI.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Handled backend creation for a off-product project and completed totally.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "My Travaly Worldwide",
        icon: mytravaly,
        iconBg: "#FE6F60",
        date: "July 2024 - Current",
        points: [
            "Maintaining different countries bookign website with the team.",
            "Working on optimization in the React app for ensuring smooth functioning and bug free application.",
            "Handling shift from 3rd party to own custom made websire for onboarding customers.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Order LLM',
        description: 'Developed a chatbot which could be customised by owner, and it will take owners by users.',
        link: 'https://github.com/mank-423/orderLLM',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-blue',
        name: 'Ideaverse (Tensorblue product)',
        description: 'Responsible for building the collections feature, credit system, and a memory feature in the youAI model.',
        link: 'https://ideaverse.ai/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'MERN-kit',
        description: "A 'npm' library for the setup of full stack project with integration of MERN technology stack",
        link: 'https://github.com/mank-423/MernKit',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-pink',
        name: 'Summary AI',
        description: 'Get a summarised version for the article that you want to read.',
        link: 'https://github.com/mank-423/SummaryAI',
    },
];