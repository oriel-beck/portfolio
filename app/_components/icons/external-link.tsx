export default function ExternalLink({ height = 30, width = 30, color = "white" }) {
    return (
        <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.70421 10.7071L15.9971 3.41421V8H17.9971V0H9.9971V2H14.5829L7.28999 9.29289L8.70421 10.7071ZM16 16V11H14V16H2V4H7V2H2C0.89543 2 0 2.89543 0 4V16C0 17.1046 0.89543 18 2 18H14C15.1046 18 16 17.1046 16 16Z" fill={color} />
        </svg>
    )
}