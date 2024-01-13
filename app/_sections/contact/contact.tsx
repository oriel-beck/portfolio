import { Form } from "@/app/_components/form";
import Heading from "@/app/_components/heading";
import { sendEmail } from "@/app/api/send-email";
import { useFormState } from "react-dom";
import colors from '../../colors.module.scss';

export default function Contact() {
    const [error, formAction] = useFormState<string | null, FormData>(sendEmail, null);

    return (
        <div className="flex flex-col items-center justify-center h-full mt-10 md:mt-0 ">
            <div>
                <div className="rounded-t-lg h-12 w-full flex flex-col justify-center items-center bg-black">
                    <Heading heading="Contact me" level="h2" />
                </div>
                <div className="w-full md:w-fit md:rounded-b px-12 py-7 bg-neutral-900">
                    <Form action={formAction} />
                </div>
            </div>
            {<p className="min-h-7 text-red-400" aria-hidden={!!error}>{error}</p>}
        </div>
    )
}