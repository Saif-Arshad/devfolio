// @ts-nocheck
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/app/_lib/utils';

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

export function AccordionContainer({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('grid grid-cols-2 gap-1', className)}>{children}</div>
    );
}

export function AccordionWrapper({ children }) {
    return <div>{children}</div>;
}

export function Accordion({
    children,
    multiple,
}: {
    children: ReactNode;
    multiple?: boolean;
}) {
    const [activeIndex, setActiveIndex] = React.useState(
        multiple ? [] : null
    );

    function onChangeIndex(value) {
        setActiveIndex((currentActiveIndex) => {
            if (!multiple) {
                return value === currentActiveIndex ? null : value;
            }

            if (currentActiveIndex.includes(value)) {
                return currentActiveIndex.filter((i) => i !== value);
            }

            return [...currentActiveIndex, value];
        });
    }

    return React.Children.map(children, (child) => {
        const value = child.props.value;
        const isActive = multiple
            ? Array.isArray(activeIndex) && activeIndex.includes(value)
            : activeIndex === value;

        return (
            <AccordionContext.Provider value={{ isActive, value, onChangeIndex }}>
                <>{child}</>
            </AccordionContext.Provider>
        );
    });
}

export function AccordionItem({ children, value }) {
    const { isActive } = useAccordion();

    return (
        <div
            className={`rounded-lg overflow-hidden mb-2  ${isActive
                ? 'active border-2 dark:border-neutral-700  border-[#F2F2F2] dark:bg-[#E0ECFB] bg-[#F2F2F2]'
                : 'bg-transparent border-2 dark:hover:border-neutral-700 '
                }
    `}
            value={value}
        >
            {children}
        </div>
    );
}

export function AccordionHeader({
    children,
    icon,
}: {
    children: ReactNode;
    icon?: any;
}) {
    const { isActive, value, onChangeIndex } = useAccordion();

    return (
        <motion.div
            className={`p-4 cursor-pointer transition-all font-semibold    dark:text-white text-black dark:hover:bg-neutral-900 hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center ${isActive
                ? 'active  dark:bg-neutral-900 bg-[#F2F2F2] '
                : 'dark:bg-neutral-800 bg-white'
                }
      `}
            onClick={() => onChangeIndex(value)}
        >
            {children}
            {icon ? (
                <div
                    className={`${isActive ? 'rotate-45 ' : 'rotate-0 '
                        } transition-transform`}
                >
                    {icon}
                </div>
            ) : (
                <>
                    <ChevronDown
                        className={`${isActive ? 'rotate-180 ' : 'rotate-0 '
                            } transition-transform`}
                    />
                </>
            )}
        </motion.div>
    );
}

export function AccordionPanel({ children }) {
    const { isActive } = useAccordion();

    return (
        <AnimatePresence initial={true}>
            {isActive && (
                <motion.div
                    initial={{ height: 0, overflow: 'hidden' }}
                    animate={{ height: 'auto', overflow: 'hidden' }}
                    exit={{ height: 0 }}
                    transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
                    className={`dark:bg-neutral-800 dark:text-white bg-[#F2F2F2]
          `}
                >
                    <motion.article
                        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                        exit={{
                            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
                        }}
                        transition={{
                            type: 'spring',
                            duration: 0.4,
                            bounce: 0,
                        }}
                        className={`p-3 bg-transparent text-white `}
                    >
                        {children}
                    </motion.article>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
