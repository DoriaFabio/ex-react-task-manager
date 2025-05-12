import { createPortal } from "react-dom";

export default function modal({
    title,
    content,
    show = false,
    onClose = () => { },
    onConfirm = () => { }
}) {
    return show && createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000093] flex justify-center items-center shadow-xl/20">
            <div className="bg-white p-[20px] rounded-xl">
                <h2 className="font-bold text-center">{title}</h2>
                <div>{content}</div>
                <div className="flex justify-around">
                    <button onClick={onConfirm} className="p-2 bg-green-400 rounded-xl cursor-pointer m-3 hover:inset-ring-4 hover:inset-ring-emerald-600 transition duration-500 ease-in-out">Conferma</button>
                    <button onClick={onClose} className="p-2 bg-red-400 rounded-xl cursor-pointer m-3 hover:inset-ring-4 hover:inset-ring-red-600 transition duration-500 ease-in-out">Annulla</button>
                </div>
            </div>
        </div>,
        document.body
    )
}
