import colors from '../../colors.module.scss';

export default function Chip({ label }: { label: string }) {
    return (
        <span className="p-2 rounded text-white font-bold" style={{ backgroundColor: colors.chipColor }}>
            {label}
        </span>
    )
}