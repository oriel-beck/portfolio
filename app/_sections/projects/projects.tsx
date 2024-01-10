import Heading from "@/app/_components/heading";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="flex h-full flex-col p-10">
            <div className="pt-10">
                <Heading heading="Projects" level="h2" />
            </div>
            <div className="flex flex-col h-full items-center pt-10">
                <ul>
                    <li className="flex flex-col md:flex-row  md:px-52 pt-5 space-x-20">
                        <div>
                            <a href="https://nekos.best" target="_blank">
                                <Heading heading="Nekos.best" level="h3" />
                            </a>
                            <p className="text-white">Nekos.best is a RESTful API that provides high quality and safe for work anime images and GIFs. I created this project as a hobby and a way to share my love for anime with other developers and enthusiasts.</p>
                        </div>
                        <div>
                            <Image
                                src='/nekos-best.png'
                                alt='nekos.best logo'
                                aria-hidden='true'
                                className="hidden md:block min-h-40 min-w-40"
                                height={300}
                                width={300}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}