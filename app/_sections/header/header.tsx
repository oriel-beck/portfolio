import Github from '@/app/_components/icons/github';
import Linkdin from '@/app/_components/icons/linkdin';
import './header.scss';

export default function Header() {
    return (
        <header className="flex w-full flex-row fixed top-0 right-0" style={{ height: '70px', backgroundColor: 'rgba(40, 40, 40, 0.70)' }}>
            <nav role='navigation' className='flex flex-row items-center ml-12'>
                <ul className='flex flex-row justify-center space-x-7 text-white'>
                    <li><a className='link' href="#about">About</a></li>
                    <li><a className='link' href="#projects">Projects</a></li>
                    <li><a className='link' href="#contact">Contact</a></li>
                </ul>
            </nav>
            <span aria-hidden="true" className='flex flex-1'></span>
            <div className='flex flex-row items-center mr-5 space-x-5'>
                <a aria-label='Github' href="https://github.com/oriel-beck" className='icon'>
                    <Github />
                </a>
                <a aria-label='Linkdin' href="https://www.linkedin.com/in/oriel-beck" className='icon'>
                    <Linkdin />
                </a>
            </div>
        </header>
    )
}
