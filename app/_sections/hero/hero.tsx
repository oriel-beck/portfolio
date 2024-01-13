import Image from 'next/image'
import Heading from '../../_components/heading';


export default function Hero() {
    return (
        <div className="flex md:flex-row sm:flex-col h-full items-center p-10 justify-center">
            <div className="header md:basis-1/2 p-5 space-y-3">
                <Heading heading='HI THERE,' level='h1' />
                <h2 className='text-white text-5xl font-bold'>I&apos;m Oriel Beck</h2>
                <p className='text-white text-lg'>I&apos;m a Full Stack Developer with a passion for code and the web, Welcome to my Portfolio, I&apos;m glad to see you here!</p>
            </div>
            <div className="image hidden md:block">
                <Image
                    priority
                    src="/hero.png"
                    aria-hidden="true"
                    alt=''
                    height={550}
                    width={550}
                />
            </div>
        </div>
    )
}