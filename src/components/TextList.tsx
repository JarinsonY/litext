interface TextListProps {
    texts: string[];
}

export const TextList: React.FC<TextListProps> = ({ texts }) => {
    return (
        <ul>
            {texts.map((text) => (
                <li key={text}>{text}</li>
            ))}
        </ul>
    );
};