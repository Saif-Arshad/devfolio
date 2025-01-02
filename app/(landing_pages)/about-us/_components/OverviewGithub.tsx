import AnimateCounter from "@/_components/ui/AnimateCounter";

interface OverviewItemProps {
    label: string;
    value: number;
    unit?: string;
}

const OverviewItem = ({ label, value, unit = '' }: OverviewItemProps) => (
    <div className='flex flex-col self-center rounded-xl border  bg-neutral-800 px-4 py-3 border-neutral-900'>
        <span className='text-sm text-neutral-400'>{label}</span>
        <div>
            <AnimateCounter
                className='text-xl font-medium text-green-600 lg:text-2xl'
                total={value}
            />
            {unit && <span className='text-sm text-neutral-400'> {unit}</span>}
        </div>
    </div>
);

export default OverviewItem;
