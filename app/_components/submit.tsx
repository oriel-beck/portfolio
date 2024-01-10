import { useFormStatus } from "react-dom";
import Send from "./icons/send";
import colors from '../colors.module.scss';

export default function Submit() {
    const status = useFormStatus();
    return <button disabled={status.pending} className="disabled:opacity-70 flex flex-row items-center justify-center font-bold p-2 rounded-lg space-x-2 text-white" style={{ backgroundColor: colors.primaryColor }}><span>{status.pending ? 'Sending' : 'Send'}</span> <i aria-hidden='true'><Send height={25} width={25} /></i></button>
}