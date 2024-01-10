import Image from 'next/image'
import colors from '../../colors.module.scss';


export default function Hero() {
    return (
        <div className="flex md:flex-row sm:flex-col h-full items-center p-10 justify-center">
            <div className="header md:basis-1/2 p-5 space-y-3">
                <h1 className='header__main-heading font-bold text-2xl' style={{ color: colors.primaryColor }}>HI THERE,</h1>
                <p className='text-white text-5xl font-bold'>I&apos;m Oriel Beck</p>
                <p className='text-white text-lg'>I&apos;m a Full Stack Developer with a passion for code and the web, Welcome to my Portfolio, I&apos;m glad to see you here!</p>
            </div>
            <div className="image hidden md:block">
                <Image
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