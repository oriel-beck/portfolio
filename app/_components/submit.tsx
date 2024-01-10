import { useFormStatus } from "react-dom";
import Send from "./icons/send";

export default function Submit() {
    const status = useFormStatus();
    return <button disabled={status.pending} className=" disabled:opacity-70 flex flex-row items-center justify-center font-bold p-2 rounded-lg w-24 bg-green-400 space-x-2"><span>{status.pending ? 'Sending' : 'Send'}</span> <i aria-hidden='true'><Send height={25} width={25} /></i></button>
}