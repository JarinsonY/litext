type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="w-full h-20 flex justify-center items-center border-t">
            <a
                className="flex items-center"
                href="https://github.com/JarinsonY"
                target="_blank"
                rel="noopener noreferrer"
            >
                Develop by Jarinson Palacios |
                <span>
                    <img src="/JP.png" alt="JP Logo" className="h-8 ml-1" />
                </span>
            </a>
        </footer>
    )
}

export default Footer