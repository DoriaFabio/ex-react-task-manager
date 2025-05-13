import { useState, useRef } from "react"
import Modal from "./modal";

export default function ModalUpdate({
    show,
    onClose,
    task,
    onSave
}) {

    const [editedTask, setEditedTask] = useState(task);
    const { title, description, status } = editedTask;
    const editFormRef = useRef();

    const changeEditedTask = (key, e) => {
        setEditedTask(prev => ({ ...prev, [key]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedTask);
    }

    return (
        <Modal
            title="Modifica task"
            content={
                <form ref={editFormRef} onSubmit={handleSubmit}>
                    <section>
                        <h2 className="text-center">Nome task</h2>
                        <input type="text"
                            value={title}
                            onChange={(e) => changeEditedTask("title", e)}
                            placeholder="Scrivi..."
                            className="p-2 border m-1" />
                    </section>
                    <section>
                        <h2 className="text-center">Descrizione task</h2>
                        <textarea
                            value={description}
                            onChange={(e) => changeEditedTask("description", e)}
                            placeholder="Scrivi..."
                            className="p-2 border m-1 h-[140px]">
                        </textarea>
                    </section>
                    <section>
                        <h2 className='text-center'>Stato</h2>
                        <select
                            value={status}
                            onChange={(e) => changeEditedTask("status", e)}
                            className='p-2 border m-1'>
                            <option value="To do">To do</option>
                            <option value="Doing">Doing</option>
                            <option value="Done">Done</option>
                        </select>
                    </section>
                </form>
            }
            show={show}
            onClose={onClose}
            onConfirm={() => editFormRef.current.requestSubmit()}
        />
    )
}