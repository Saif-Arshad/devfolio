import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
    SiAppwrite,
    SiCss3,
    SiExpress,
    SiFirebase,
    SiGatsby,
    SiGraphql,
    SiJavascript,
    SiJest,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiNuxtdotjs,
    SiPostgresql,
    SiPrisma,
    SiPwa,
    SiReact,
    SiRedux,
    SiSocketdotio,
    SiStyledcomponents,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiWebpack,
} from 'react-icons/si';

export type stacksProps = {
    [key: string]: JSX.Element;
};

const iconSize = 25;

export const STACKS: stacksProps = {
    JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
    TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
    "Next Js": <SiNextdotjs size={iconSize} />,
    'React Js': <SiReact size={iconSize} className='text-sky-500' />,
    "Tailwind Css": <SiTailwindcss size={iconSize} className='text-cyan-300' />,
    Bootstrap: (
        <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
    ),
    MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
    "MySQL": <SiMysql size={iconSize} className='text-blue-500' />,
    AppWrite: <SiAppwrite size={iconSize} className='text-blue-500' />,
    Supabase: <SiSupabase size={iconSize} className='text-blue-500' />,
    Postgresql: <SiPostgresql size={iconSize} className='text-blue-500' />,
    GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
    MUI: <SiMui size={iconSize} className='text-sky-400' />,
    Vite: <SiVite size={iconSize} className='text-purple-500' />,
    Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
    Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
    AI: (
        <BsRobot size={iconSize} className='text-rose-500' />
    ),
    "Nuxt Js": <SiNuxtdotjs size={iconSize} className='text-green-400' />,
    "Node Js": <SiNodedotjs size={iconSize} className='text-green-600' />,
    Gatsby: <SiGatsby size={iconSize} className='text-purple-600' />,
    Redux: <SiRedux size={iconSize} className='text-purple-500' />,
    Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
    "Styled Components":
        <SiStyledcomponents size={iconSize} className='text-pink-500' />,
    PWA: <SiPwa size={iconSize} className='text-amber-600' />,
    Jest: <SiJest size={iconSize} className='text-red-600' />,
    CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
    Socket: <SiSocketdotio size={iconSize} />,
    Express: <SiExpress size={iconSize} />,
};
