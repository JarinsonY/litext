import { RefObject, SetStateAction } from 'react'

import { TextApp } from '../utils/types';

import { TrashIcon } from '@heroicons/react/24/solid'
import { deleteText } from '../services/text';

type Props = {
    texts: TextApp[];
    setTexts: (value: SetStateAction<TextApp[]>) => void;
    listRef: RefObject<HTMLDivElement>;
}

const TextList = ({ texts, setTexts, listRef }: Props) => {

    const handleDelete = (id: string) => {
        deleteText(id)
            .then((response) => {
                setTexts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="w-4/5 lg:w-1/2">
            <h2 className="text-xl font-black text-center col-start-1 col-end-3 m-auto text-white bg-black rounded p-2">LIST OF TEXTS</h2>

            <div ref={listRef} className="lof overflow-y-scroll h-72 lg:h-[65vh] py-2">
                {texts.length === 0
                    ? <div className="h-full flex items-center justify-center">
                        <p className="text-3xl text-center text-gray-500">No texts to display</p>
                    </div>
                    : <ul className="divide-y divide-gray-200">
                        {texts.map((text, index) => (
                            <li key={text.id} className="py-4 px-6 group hover:bg-blue-50 hover:shadow-md">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <p className="font-medium text-gray-900 group-hover:text-blue-900 group-hover:font-semibold">{index + 1}</p>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-500 truncate group-hover:text-blue-700 group-hover:font-semibold">{text.text}</p>
                                    </div>
                                    <div
                                        className="cursor-pointer flex-shrink-0"
                                        onClick={() => handleDelete(text.id)}
                                    >
                                        <TrashIcon className="h-5 w-5 text-red-300 hover:text-red-700" />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

export default TextList