import Label from "../label";
import './input.scss'

export default function Input({ label, name, placeholder, id, type = "text", required = false }: { label: string, placeholder: string, name: string, id: string, type?: string, required?: boolean }) {

    if (type === "textarea") return (
        <div className="flex flex-col h-full w-full">
            <span className="pb-1">
                <Label label={label} id={id} />
            </span>
            <textarea required={required} className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 h-full" id={id} name={name} placeholder={placeholder} />
        </div>
    )

    return (
        <div className="flex flex-col h-full w-full">
            <span className="pb-1">
                <Label label={label} id={id} />
            </span>
            <input required={required} className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" id={id} name={name} placeholder={placeholder} type={type} />
        </div>
    )
}