"use client"
import Input from "./input/input";
import Submit from "./submit";
import colors from '../colors.module.scss';

export function Form({ action }: { action: (formData: FormData) => unknown }) {
    return (
        <form action={action} className="w-full md:w-fit flex flex-col items-center p-12 md:rounded justify-center space-y-10" style={{ backgroundColor: colors.bg1 }}>
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
    )
}