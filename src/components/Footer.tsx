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
                Develop by Jarinson Palacios
                <span className="h-4 ml-2">
                    <img src="/JP.png" alt="JP Logo" className="h-4 ml-2" />
                </span>
            </a>
        </footer>
    )
}

export default Footer