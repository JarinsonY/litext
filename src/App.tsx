import axios from 'axios';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

interface Text {
    id: number;
    text: string;
}

function App() {
    const [textInput, setTextInput] = useState("");
    const [texts, setTexts] = useState<Text[]>([]);
    const listRef = useRef<HTMLDivElement>(null);

    const scrollToEnd = () => {
        // timeout for scroll to execute after DOM has been updated
        const scrollTimeout = setTimeout(() => {
            if (listRef.current) {
                listRef.current.scrollTop = listRef.current.scrollHeight;
            }
        }, 0);

        return () => clearTimeout(scrollTimeout);
    };


    useEffect(() => {
        // request the list of texts from the backend
        axios.get<Text[]>("http://192.168.10.22:4000/texts")
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
            // send the text to the backend and update the list of texts
            axios.post<Text[]>("http://192.168.10.22:4000/texts", { text: textInput })
                .then((response) => {
                    setTexts(response.data);
                    setTextInput("");
                    scrollToEnd();
                });
        }
    };

    return (
        <div className="h-screen px-2 flex flex-col justify-center items-center">
            <div className="w-11/12 py-20 flex flex-col lg:flex-row gap-y-9 flex-1 justify-center items-center">

                <form
                    onSubmit={handleFormSubmit}
                    className="w-4/5 lg:w-2/4 px-6"
                >
                    <div className="mb-4">
                        <label htmlFor="text" className="block text-gray-700 font-bold mb-2 cursor-pointer">
                            Type a text here
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="text"
                            value={textInput}
                            onChange={handleTextInputChange}
                            className="w-full bg-white border-4 border-solid border-slate-400 rounded h-11 leading-10 pl-2.5 pr-10 transition-all focus:border-4 focus:border-solid focus:border-blue-500 focus:outline-none focus:shadow-2xl"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            type="submit"
                            disabled={textInput.trim() === ""}
                            className="w-1/2 lg:w-full h-11 leading-10 bg-black text-white font-bold border-none rounded transition-all hover:bg-blue-700 focus:shadow-xl disabled:bg-slate-400"
                        >
                            Send
                        </button>
                    </div>
                </form>

                <div className="w-4/5 lg:w-1/2">
                    <h2 className="text-xl font-bold text-center col-start-1 col-end-3 m-auto text-white bg-black rounded p-2">List of texts</h2>

                    <div ref={listRef} className="lof overflow-y-scroll h-72 lg:h-[65vh] py-2">
                        {texts.length === 0
                            ? <p className="text-center text-gray-500">No hay textos</p>
                            : <ul className="divide-y divide-gray-200">
                                {texts.map((text) => (
                                    <li key={text.id} className="py-4 px-6 group hover:bg-blue-50 hover:shadow-md">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <p className="font-medium text-gray-900">{text.id}</p>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-gray-500 truncate group-hover:text-blue-700">{text.text}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </div>
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
        </div>
    );
}

export default App;
