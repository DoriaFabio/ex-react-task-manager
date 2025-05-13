import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/globalContext'
import Modal from '../components/modal';
import ModalUpdate from '../components/ModalUpdate';
import TrashIcon from '../components/TrashIcon';


export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, RemoveTask, UpdateTask } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const SingleTask = tasks.find(t => t.id === parseInt(id));

  if (!SingleTask) {
    return (
      <h2 className="font-bold text-3xl m-5 text-center">Task non trovata</h2>
    )
  }

  const handleDelete = async () => {
    try { // Provo a eseguire la funzione AddTask
      await RemoveTask(SingleTask.id); // Passo l'oggetto newTask alla funzione AddTask
      alert("Task eliminata con successo");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message); // Mostro un alert con il messaggio di errore
    }
  }

  const handleUpdate = async UpdatedTask => {
    try {
      await UpdateTask(UpdatedTask);
      alert("Task modificata con successo");
      setShowEdit(false);
    } catch (err) {
      console.error(err);
      alert(err.message); // Mostro un alert con il messaggio di errore
    }
  }

  return (
    <div className='my-5 flex flex-col items-center'>
      <h1 className='font-bold text-3xl mb-3'>Pagina di dettaglio</h1>
      <p className='mb-1 text-[18px]'><strong>Nome: </strong>{SingleTask.title}</p>
      <p className='mb-1 text-[18px]'><strong>Descrizione: </strong>{SingleTask.description}</p>
      <p className='mb-1 text-[18px]'><strong>Stato: </strong>{SingleTask.status}</p>
      <p className='mb-1 text-[18px]'><strong>Data di creazione: </strong>{new Date(SingleTask.createdAt).toLocaleDateString()}</p>
      <div className='flex gap-4 mt-2'>
        <button className='group rounded-xl flex justify-center items-center gap-2 max-h-[100px]  
      cursor-pointer hover:border-red-400 transition-all duration-300 ease-in-out' onClick={() => setShow(true)}>
          <div className="relative p-2 flex flex-col items-center justify-center overflow-hidden rounded-xl border-2 shadow-lg border-red-800 bg-red-700 hover:bg-red-800">
            <TrashIcon />
          </div>
        </button>
        <button className='border p-2 rounded-md bg-blue-700 hover:bg-blue-500 
          text-white border-black transition duration-500 ease-in-out shadow-lg' onClick={() => setShowEdit(true)}>Modifica Task</button>
      </div>
      <Modal
        title="Elimina Task"
        content="Sicuro di voler eliminare questa task??"
        show={show}
        onClose={() => setShow(false)}
        onConfirm={handleDelete}
      />
      <ModalUpdate
        show={showEdit}
        task={SingleTask}
        onClose={() => setShowEdit(false)}
        onSave={handleUpdate}
      />
    </div>
  )
}
