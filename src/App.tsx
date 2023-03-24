import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';


interface Text {
    id: number;
    text: string;
}


function App() {
    const [textInput, setTextInput] = useState('');
    const [texts, setTexts] = useState<Text[]>([]);

    useEffect(() => {
        // al montar el componente, pedimos la lista de textos al backend
        axios.get<Text[]>("http://localhost:4000/texts")
            .then((response) => {
                setTexts(response.data);
            });
    }, []);

    const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.target.value);
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (textInput.trim() !== "") {
            // enviamos el texto al backend y actualizamos la lista de textos
            /* axios.post<Text>("http://localhost:4000/texts", { text: textInput })
                .then((response) => {
                    setTexts((texts) => [...texts, response.data]);
                    setTextInput("");
                }); */
            axios.post<Text[]>("http://localhost:4000/texts", { text: textInput })
                .then((response) => {
                    setTexts(response.data);
                    setTextInput("");
                });
        }
    };

    const getAllTexts = async () => {
        const response = await fetch('http://localhost:4000/texts');
        const data = await response.json();
        console.log(data);
        // setTexts(data);
    };

    return (
        <div className="p-4">
            <button
                type="button"
                onClick={getAllTexts}
                className="border-4 border-blue-500 bg-white text-blue-500 font-bold mb-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Get all texts
            </button>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label htmlFor="text" className="block text-gray-700 font-bold mb-2">
                        Texto
                    </label>
                    <input
                        type="text"
                        id="text"
                        name="text"
                        value={textInput}
                        onChange={handleTextInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Enviar
                </button>
            </form>
            <ul className="list-disc list-inside mt-4">
                {texts.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
