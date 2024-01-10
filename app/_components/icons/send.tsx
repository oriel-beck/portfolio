export default function Send({ height = 30, width = 30, color = "white" }) {
    return (
        <svg width={height} height={width} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M-0.00390625 0.28418L1.98672 14.2186L3.1122 14.5L1.98672 14.7813L-0.00390625 28.7157L28.4277 14.5L-0.00390625 0.28418ZM4.59673 11.8647L3.67069 5.38241L21.9058 14.5L3.67069 23.6175L4.59673 17.1353L15.1379 14.5L4.59673 11.8647Z" fill={color} />
        </svg>
    )
}