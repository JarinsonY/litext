import { useState } from 'react';
import axios from 'axios';

interface TextFormProps {
    setTexts: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TextForm: React.FC<TextFormProps> = ({ setTexts }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/api/texts', { text });
        const response = await axios.get('/api/texts');
        setTexts(response.data);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit">Enviar</button>
        </form>
    );
};