import colors from '../colors.module.scss'

export default function Heading({ heading, level }: { heading: string, level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }) {
    switch(level) {
        case "h1":
            return <h1 className='text-2xl font-bold' style={{ color: colors.primaryColor }}>{heading}</h1>
        case "h2":
            return <h2 className='text-2xl font-bold' style={{ color: colors.primaryColor }}>{heading}</h2>
        case "h3":
            return <h3 className='text-2xl font-bold' style={{ color: colors.primaryColor }}>{heading}</h3>
        case "h4":
            return <h4 className='text-2xl font-bold' style={{ color: colors.primaryColor }}>{heading}</h4>
        case "h5":
            return <h5 className='text-2xl font-bold' style={{ color: colors.primaryColor }}>{heading}</h5>
        case "h6":
            return <h6 className='text-2xl font-bold' style={{ color: colors.primaryColor }}>{heading}</h6>
    }
}