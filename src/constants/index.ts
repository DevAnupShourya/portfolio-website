import { DiscordLogo, GithubLogo, LinkedinLogo, XLogo } from "@src/constants/logos";

export const SocialLinks = [
    {
        name: 'X - twitter',
        url: 'https://twitter.com/Shourya_Anup',
        icon: XLogo,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/DevAnupShourya',
        icon: GithubLogo,
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/anupshourya/',
        icon: LinkedinLogo,
    },
    {
        name: 'discord',
        url: 'https://discord.com/users/1205834045486006323',
        icon: DiscordLogo
    },
]

export type Project = {
    image: string;
    logoUrl: string;
    name: string;
    status: 'live' | 'development' | 'yet-to-start';
    type: string;
    date: string;
    desc: string;
    link: string;
    underDevelopment?: boolean;
};

// TODO : update project list 
// CANDO : add progress bar how much it completed. fetch that from StepByStep.com roadmap
export const Projects: Project[] = [
    {
        // TODO : update with real image
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        logoUrl: "/assets/projects/mynx.svg",
        status: "live",
        name: "Mynx",
        type: "Social Media Website",
        date: "2024",
        desc: "The ultimate social media platform designed to connect individuals without censorship",
        link: "https://mynx.vercel.app/",
        underDevelopment: false
    },
    {
        // TODO : update with real image
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        logoUrl: "/assets/projects/starnaut.svg",
        status: "development",
        name: "Starnaut.ai",
        type: "AI SASS",
        date: "2024",
        desc: "Your Personalized AI Chatting Friend.",
        link: "#",
        underDevelopment: false
    },
    {
        // TODO : update with real image
        image: "",
        // logoUrl: "/assets/projects/starnaut.svg",
        logoUrl: "",
        status: "yet-to-start",
        name: "StepByStep",
        type: "Utility SASS",
        date: "2024",
        desc: "Easy to use roadmap plan creator.",
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

    // backend end
    'NODEJS',
    'Expressjs',
    'Prisma',

    // db
    'MONGODB',
    'PostgreSQL',
    'MySQL',

    // software       
    'Git',
    'Lunacy',
    'Vim',
];

import Blog1 from '@src/blogs/Blog1';

export const BlogsList = [
    {
        title: "Breathtaking Mountain Views from Cozy Cabin",
        description: "Escape the city and immerse yourself in nature's beauty with a stay in this charming cabin nestled amidst breathtaking mountains.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    },
    {
        title: "Master the Art of Baking with Online Classes",
        description: "Become a baking pro from the comfort of your own kitchen with engaging online classes led by skilled pastry chefs.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    },
    {
        title: "Unleash Your Creativity with Digital Art Workshops",
        description: "Explore the world of digital art and develop your artistic skills through interactive workshops led by industry professionals.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    },
    {
        title: "The Ultimate Guide to Sustainable Travel",
        description: "Travel the world responsibly and minimize your environmental impact with these tips and recommendations for sustainable travel.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    },
    {
        title: "5 Must-Try Restaurants for Foodies in Paris",
        description: "Embark on a culinary adventure in the City of Lights with our guide to the top 5 restaurants for food enthusiasts in Paris.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    },
    {
        title: "Learn a New Language with Interactive Apps",
        description: "Break down language barriers and expand your horizons by learning a new language with fun and engaging mobile applications.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    },
    {
        title: "Unlock the Secrets of the Night Sky with Stargazing Tours",
        description: "Join experienced guides on stargazing tours and discover the wonders of the cosmos, from constellations and planets to galaxies and nebulae.",
        image: "https://placehold.co/1280x720/000000/fe3544/png",
        publishedOn : '2024-12-08',
        ComponentName : Blog1
    }
];