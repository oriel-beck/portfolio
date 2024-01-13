import Chip from "@/app/_components/chip"
import Heading from "@/app/_components/heading"

export default function About() {
    const skills = ["HTML", "(S)CSS", "JavaScript", "TypeScript", "ASP.NET", "Python", "Angular", "React", "Vue", "Docker", "Figma", "Azure", "AWS", "SQL", "GIT"]
    return (
        <div className="flex md:flex-row items-center p-10 h-full">
            <div className="flex flex-col md:flex-row md:space-x-10 mt-2 md:mt-0 ">
                <div className="basis-1/2 flex flex-col mb-5">
                    <div className='pb-5'>
                        <Heading heading='About me' level='h2' />
                    </div>
                    <p className='text-white text-pretty'>Hi, I&apos;m Oriel Beck, a Full Stack developer with a passion for creating web applications that are fast, functional, and user-friendly. I have experience in working with Angular, React, and Vue frameworks, as well as using Agile methodology and TDD principles. I have worked as a Full Stack developer for Zoominfo, a leading enterprise software company, and Winfluence, a startup that provides email campaigns management solutions. I have also developed nekos.best, an anime gif and image API that serves hundreds of thousands of requests and visitors every month. I am always eager to learn new technologies and improve my skills as a developer. I am looking for opportunities to work on challenging and innovative projects that can make a positive impact on the world.</p>
                </div>
                <div className="basis-1/2 flex flex-col">
                    <div className="pb-5">
                        <Heading heading='My skills' level='h2' />
                    </div>
                    <ul className="flex items-center flex-row flex-wrap">
                        {skills.map((skill, i) => (
                            <li key={i} className="p-2 mr-1 mb-2">
                                <Chip label={skill} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}