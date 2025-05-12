import { createPortal } from "react-dom"

export default function ModalUpdate({
    show = false,
    onClose = () => { },
    task = {},
    onSave = () => { }
}) {
    return show && createPortal(
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000093] flex justify-center items-center shadow-xl/20">
            <div className="bg-white p-[20px] rounded-xl">
                <h2 className="font-bold text-center">Modifica task</h2>
                <form onSubmit={onSave}>
                    <div className="flex justify-around">
                        <button onClick={onSave} className="p-2 bg-green-400 rounded-xl cursor-pointer m-3 hover:inset-ring-4 hover:inset-ring-emerald-600 transition duration-500 ease-in-out">Salva</button>
                        <button onClick={onClose} className="p-2 bg-red-400 rounded-xl cursor-pointer m-3 hover:inset-ring-4 hover:inset-ring-red-600 transition duration-500 ease-in-out">Annulla</button>
                    </div>
                </form>

            </div>
        </div>,
        document.body
    )
}

// Utilizzare il componente Modal per creare la modale di modifica,
// passandogli i seguenti valori:
//  - title: "Modifica Task".
//  - content: un form contenente i campi del task da modificare.
//  - confirmText: "Salva".
//  - onConfirm: deve attivare il submit del form.
