import { ChangeEvent, FormEvent, SetStateAction } from 'react'

import Button from './Button';
import Input from './Input';

type Props = {
    textInput: string;
    setTextInput: (value: SetStateAction<string>) => void;
    handleFormSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const TextForm = ({ textInput, setTextInput, handleFormSubmit }: Props) => {

    const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTextInput(event.target.value);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="w-4/5 lg:w-2/4 px-6"
        >
            <div className="mb-4">
                <Input
                    id="text"
                    type="text"
                    label="Text"
                    value={textInput}
                    onChange={handleTextInputChange}
                />
            </div>
            <div className="w-full flex justify-center">
                <Button
                    type="submit"
                    disabled={textInput.trim() === ""}
                >
                    Send
                </Button>
            </div>
        </form>
    )
}

export default TextForm