import { useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/globalContext'
import Modal from '../components/ModalDelete';

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, RemoveTask } = useContext(GlobalContext);
  const [show, setShow] = useState(false);

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
      navigate("/tasklist");
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
      <button className='border p-2 m-2 rounded-md bg-blue-700 hover:bg-blue-500 
          text-white border-black transition duration-500 ease-in-out' onClick={() => setShow(true)}>Elimina Task</button>
      <Modal
        title="Elimina Task"
        content="Sicuro di voler eliminare questa task??"
        show={show}
        onClose={() => setShow(false)}
        onConfirm={handleDelete}
      />
    </div>
  )
}
