import './header.scss';
import Github from './icons/github';
import Linkdin from './icons/linkdin';

export default function Header() {
    return (
        <header className="flex w-full flex-row" style={{ height: '70px', backgroundColor: 'rgba(40, 40, 40, 0.70)' }}>
            <nav role='navigation' className='flex flex-row items-center ml-12'>
                <ul className='flex flex-row justify-center space-x-7 text-white'>
                    <li><a className='link' href="#about">About</a></li>
                    <li><a className='link' href="#projects">Projects</a></li>
                    <li><a className='link' href="#contact">Contact</a></li>
                </ul>
            </nav>
            <span aria-hidden="true" className='flex flex-1'>

            </span>
            <div className='flex flex-row items-center mr-5'>
                <a href="" className='mr-5 icon'>
                    <Github />
                </a>
                <a className='icon' href="">
                    <Linkdin />
                </a>
            </div>
        </header>
    )
}
