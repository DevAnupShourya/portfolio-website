export const SocialLinks = [
    {
        name: 'twitter',
        url: 'https://twitter.com/Shourya_Anup',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/DevAnupShourya',
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/anupshourya/',
    },
    {
        name: 'discord',
        url: 'https://discord.com/users/1205834045486006323',
    },
    {
        name: 'fiverr',
        url: 'https://www.fiverr.com/yourwebdevanup',
    },
    {
        name: 'upwork',
        url: 'https://www.upwork.com/freelancers/~012fda8d55f862fe5f',
    },
]

type Projects = {
    image: string;
    logoUrl: string;
    name: string;
    status: string;
    type: string;
    date: string;
    desc: string;
    link: string;
    underDevelopment?: boolean;
};

export const Projects: Projects[] = [
    {
        image: "/assets/projects/mynx.webp",
        logoUrl: "/assets/projects/mynx.svg",
        status: "live",
        name: "Mynx",
        type: "Full-Stack",
        date: "2024",
        desc: "World in Pixels, the ultimate social media platform designed to connect individuals",
        link: "https://mynx.vercel.app/",
        underDevelopment: false
    },
    {
        image: "",
        logoUrl: "/assets/projects/nexus.ai.png",
        status: "designing",
        name: "Nexus.ai",
        type: "SASS",
        date: "2024",
        desc: "The Wikipedia of the future: Community-driven, AI-powered.",
        link: "#",
        underDevelopment: true
    },
    {
        image: "",
        logoUrl: "/assets/projects/gati.png", // Ankh Sanctuary Font
        status: "designing",
        name: "GATI.JS",
        type: "GSAP Components Library",
        date: "2024",
        desc: "Unleash the power of GSAP and Three.js with pre-built component0s.",
        link: "#",
        underDevelopment: true
    },
]   

export const toolsIKnow = [
    // languages
    'JAVASCRIPT',
    'TYPESCRIPT',

    // front end
    'REACTJS',
    'NEXTJS',
    'HTML5',
    'CSS',
    'SASS',
    'TAILWINDCSS',
    'MaterialUI',
    'ShadCNUI',
    'NextUI',
    'REDUX',

    // backend end
    'NODEJS',
    'Express.js',
    'Prisma',
    'Docker',

    // db
    'MONGODB',
    'PostgreSQL',
    'MySQL',

    // software       
    'Git',
    'GitHub',
    'Lunacy',
    'Vim',
    'VSCode',
];
