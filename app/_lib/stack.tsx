import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
    SiAngular,
    SiCss3,
    SiExpress,
    SiFirebase,
    SiGatsby,
    SiGraphql,
    SiJavascript,
    SiJest,
    SiJquery,
    SiMui,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiNuxtdotjs,
    SiPrisma,
    SiPwa,
    SiReact,
    SiRedux,
    SiSocketdotio,
    SiStorybook,
    SiStyledcomponents,
    SiTailwindcss,
    SiTypescript,
    SiVite,
    SiVuedotjs,
    SiWebpack,
} from 'react-icons/si';

export type stacksProps = {
    [key: string]: JSX.Element;
};

const iconSize = 25;

export const STACKS: stacksProps = {
    JS: <SiJavascript size={iconSize} className='text-yellow-400' />,
    TS: <SiTypescript size={iconSize} className='text-blue-400' />,
    Next: <SiNextdotjs size={iconSize} />,
    React: <SiReact size={iconSize} className='text-sky-500' />,
    Tailwind: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
    Bootstrap: (
        <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
    ),
    GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
    MUI: <SiMui size={iconSize} className='text-sky-400' />,
    Vite: <SiVite size={iconSize} className='text-purple-500' />,
    Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
    Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
    AI: (
        <BsRobot size={iconSize} className='text-rose-500' />
    ),
    Angular: <SiAngular size={iconSize} className='text-red-500' />,
    Vue: <SiVuedotjs size={iconSize} className='text-green-500' />,
    Nuxt: <SiNuxtdotjs size={iconSize} className='text-green-400' />,
    Node: <SiNodedotjs size={iconSize} className='text-green-600' />,
    Gatsby: <SiGatsby size={iconSize} className='text-purple-600' />,
    Redux: <SiRedux size={iconSize} className='text-purple-500' />,
    Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
    Styled:
        <SiStyledcomponents size={iconSize} className='text-pink-500' />,
    PWA: <SiPwa size={iconSize} className='text-amber-600' />,
    Nginx: <SiNginx size={iconSize} className='text-green-500' />,
    Jest: <SiJest size={iconSize} className='text-red-600' />,
    Storybook: <SiStorybook size={iconSize} className='text-amber-500' />,
    CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
    Socket: <SiSocketdotio size={iconSize} />,
    Express: <SiExpress size={iconSize} />,
    Jquery: <SiJquery size={iconSize} />,
};
