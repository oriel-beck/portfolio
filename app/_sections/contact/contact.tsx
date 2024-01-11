import { Form } from "@/app/_components/form";
import Heading from "@/app/_components/heading";
import { sendEmail } from "@/app/api/send-email";
import colors from '../../colors.module.scss';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div>
                <div className="rounded-t-lg h-12 w-full flex flex-col justify-center items-center bg-gray-400">
                    <Heading heading="Contact me" level="h2" />
                </div>
                <div className="w-full md:w-fit md:rounded px-12 py-7" style={{ backgroundColor: colors.bg1 }}>
                    <Form action={sendEmail} />
                </div>
            </div>
        </div>
    )
}