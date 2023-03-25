import { ReactNode } from "react";

type Props = {
    type: "submit" | "button" | "reset";
    disabled: boolean;
    children: ReactNode;
}

const Button = ({ type, disabled, children }: Props) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className="w-1/2 lg:w-full h-11 leading-10 bg-black text-white font-bold border-none rounded transition-all hover:bg-blue-700 focus:shadow-xl disabled:bg-slate-400"
        >
            {children}
        </button>
    )
}

export default Button