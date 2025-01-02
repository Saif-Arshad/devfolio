import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
    children: ReactNode;
    isReverse?: boolean;
}

const InfiniteLoopSlider = ({
    children,
    isReverse = false,
}: InfiniteLoopSliderProps) => {
    return (
        <div
            className={`infinite-loop-slider ${isReverse ? 'reverse' : 'normal'
                }`}
        >
            {children}
        </div>
    );
};

export default InfiniteLoopSlider;
