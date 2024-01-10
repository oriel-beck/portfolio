import { Form } from "@/app/_components/form";

export default function Contact() {
    async function test(formData: FormData) {
        "use server"
        await new Promise((res) => setTimeout(() => {
            res(true)
        }, 5000))
        console.log(formData)
    }

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Form action={test} />
        </div>
    )
}