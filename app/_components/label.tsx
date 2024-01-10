import colors from '../colors.module.scss';

export default function Label({ label, id }: { label: string, id: string }) {
    return <label htmlFor={id} className="font-bold" style={{ color: colors.primaryColor }}>{label}</label>
}