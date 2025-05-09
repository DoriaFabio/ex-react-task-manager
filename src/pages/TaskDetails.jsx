import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/globalContext'

export default function TaskDetails() {
  const { id } = useParams();
  const { tasks } = useContext(GlobalContext);

  const SingleTask = tasks.find(t => t.id === parseInt(id));
  if (!SingleTask) {
    return (
      <h2 className="font-bold text-3xl m-5 text-center">Task non trovata</h2>
    )
  }

  function handleDelete() {
    console.log("Cancella task");
  }

  return (
    <div className='my-5 flex flex-col items-center'>
      <h1 className='font-bold text-3xl mb-3'>Pagina di dettaglio</h1>
      <p className='mb-1 text-[18px]'><strong>Nome: </strong>{SingleTask.title}</p>
      <p className='mb-1 text-[18px]'><strong>Descrizione: </strong>{SingleTask.description}</p>
      <p className='mb-1 text-[18px]'><strong>Stato: </strong>{SingleTask.status}</p>
      <p className='mb-1 text-[18px]'><strong>Data di creazione: </strong>{new Date(SingleTask.createdAt).toLocaleDateString()}</p>
      <button className='border p-2 m-2 rounded-md bg-blue-700 hover:bg-blue-500 
          text-white border-black transition duration-500 ease-in-out' onClick={handleDelete}>Elimina Task</button>
    </div>
  )
}
