import { FormEvent, useEffect, useRef, useState } from 'react';

// Components
import Footer from './components/Footer';
import TextForm from './components/TextForm';
import TextList from './components/TextList';

// Types
import { TextApp } from './utils/types';

// Services
import { addText, getTexts } from './services/text';

// Utils
import { scrollToEnd } from './utils/functions';

function App() {
    const [textInput, setTextInput] = useState("");
    const [texts, setTexts] = useState<TextApp[]>([]);
    const listRef = useRef<HTMLDivElement>(null);

    // request the list of texts from the backend when the component is mounted
    useEffect(() => {
        getTexts()
            .then((response) => {
                setTexts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // send the text to the backend and update the list of texts when the form is submitted
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (textInput.trim() !== "") {
            addText(textInput)
                .then((response) => {
                    setTexts(response.data);
                    setTextInput("");
                    scrollToEnd(listRef);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="h-screen px-2 flex flex-col justify-center items-center">
            <main className="w-11/12 py-20 flex flex-col lg:flex-row gap-y-9 flex-1 justify-center items-center">
                <TextForm
                    textInput={textInput}
                    setTextInput={setTextInput}
                    handleFormSubmit={handleFormSubmit}
                />

                <TextList texts={texts} setTexts={setTexts} listRef={listRef} />
            </main>

            <Footer />
        </div>
    );
}

export default App;
