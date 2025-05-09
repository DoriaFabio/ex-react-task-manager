import { useContext } from "react"
import { GlobalContext } from "../context/globalContext"
import Taskrow from "../components/Taskrow";

export default function TaskList() { 
  const { tasks } = useContext(GlobalContext);
  console.log("Tasks:", tasks); 
  
  return (
    <div className='my-5 flex flex-col items-center'>
      <h1 className="font-bold text-2xl">Questa è la lista dei task</h1>
      <table className="border my-2">
        <thead className="bg-blue-900 text-white hover:bg-blue-800 transition duration-500 ease-in-out">
          <tr>
            <th className="border py-1 border-black">Nome</th>
            <th className="border py-1 border-black">Stato</th>
            <th className="border py-1 border-black px-3">Data di creazione</th>
          </tr>
        </thead>
        <tbody className="bg-blue-200">
          {tasks.length > 0
            ? tasks.map((p) => (
              <Taskrow data={p} key={p.id} />
            )) : <tr><td colSpan="3">Nessun task</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}
