import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface Text {
    id: number;
    text: string;
}

function App() {
    const [textInput, setTextInput] = useState("");
    const [texts, setTexts] = useState<Text[]>([]);

    useEffect(() => {
        // al montar el componente, pedimos la lista de textos al backend
        axios.get<Text[]>("http://localhost:4000/texts").then((response) => {
            setTexts(response.data);
        });
    }, []);

    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (textInput.trim() !== "") {
            // enviamos el texto al backend y actualizamos la lista de textos
            axios.post<Text>("http://localhost:4000/texts", { text: textInput }).then((response) => {
                setTexts((texts) => [...texts, response.data]);
                setTextInput("");
            });
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleFormSubmit}>
                <label>
                    Text:
                    <input type="text" value={textInput} onChange={handleTextInputChange} />
                </label>
                <button type="submit">Send</button>
            </form>
            <ul>
                {texts.map((text) => (
                    <li key={text.id}>{text.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
