import { RefObject } from 'react'
import { TextApp } from '../utils/types';

type Props = {
    texts: TextApp[];
    listRef: RefObject<HTMLDivElement>;
}

const TextList = ({ texts, listRef }: Props) => {
    return (
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
    )
}

export default TextList