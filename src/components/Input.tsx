import { ChangeEvent } from "react";

type Props = {
    id: string;
    type: "text" | "email" | "password" | "number" | "date" | "time" | "datetime-local" | "month" | "week" | "url" | "search" | "tel" | "color";
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, type, label, value, onChange }: Props) => {
    return (
        <>
            <label htmlFor={id} className="block text-gray-700 font-bold mb-2 cursor-pointer">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className="w-full bg-white border-4 border-solid border-slate-400 rounded h-11 leading-10 pl-2.5 pr-10 transition-all focus:border-4 focus:border-solid focus:border-blue-500 focus:outline-none focus:shadow-2xl"
            />
        </>
    )
}

export default Input