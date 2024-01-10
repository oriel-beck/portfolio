"use client"
import Input from "./input/input";
import Submit from "./submit";
import colors from '../colors.module.scss';
import Heading from "./heading";

export function Form({ action }: { action: (formData: FormData) => unknown }) {
    return (
        <div>
            <div className="rounded-t-lg h-12 w-full flex flex-col justify-center items-center bg-gray-400">
                <Heading heading="Contact me" level="h2" />
            </div>
            <div className="w-full md:w-fit md:rounded px-12 py-7" style={{ backgroundColor: colors.bg1 }}>
                <form action={action} className="flex flex-col items-center justify-center space-y-10">
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-10 h-1/4">
                        <Input id="name" label="Name" name="name" placeholder="Enter your name" />
                        <Input id="email" label="Email" name="email" placeholder="Enter your email" />
                    </div>
                    <div className="w-full md:w-3/4 h-52">
                        <Input id="message" label="Message" name="message" placeholder="Type your message" type="textarea" />
                    </div>
                    <div className="flex flex-row w-full justify-end">
                        <Submit />
                    </div>
                </form>
            </div>
        </div>
    )
}