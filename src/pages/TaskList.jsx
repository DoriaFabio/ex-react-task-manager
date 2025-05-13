import { useContext, useState, useMemo } from "react"
import { GlobalContext } from "../context/globalContext"
import Taskrow from "../components/Taskrow";
import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

export default function TaskList() {
  const { tasks } = useContext(GlobalContext);
  console.log("Tasks:", tasks);
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);

  const sortIcon = sortOrder === 1 ? <AiFillCaretDown className="inline" /> : <AiFillCaretUp className="inline" />;

  const handleOrder = (c) => {
    if (sortBy === c) {
      // Se è già selezionato, inverte l'ordine
      setSortOrder((prev) => prev * -1);
    } else {
      // Se è una nuova colonna, imposta sortBy e resetta sortOrder a crescente
      setSortBy(c);
      setSortOrder(1);
    }
  }

  const sortTasks = useMemo(() => {
    return [...tasks].sort((a, b) => {
      let compare;
      if (sortBy === "title") {
        compare = a.title.localeCompare(b.title);
      } else if (sortBy === "status") {
        const statusOption = ["To do", "Doing", "Done"];
        compare = statusOption.indexOf(a.status) - statusOption.indexOf(b.status);
      } else if (sortBy === "createdAt") {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        compare = dateA - dateB
      }
      return compare * sortOrder;
    });
  }, [tasks, sortBy, sortOrder])

  return (
    <div className='my-5 flex flex-col items-center'>
      <h1 className="font-bold text-2xl">Questa è la lista dei task</h1>
      <table className="border my-2">
        <thead className="bg-blue-900 text-white hover:bg-blue-800 transition duration-500 ease-in-out">
          <tr>
            <th className="border py-1 border-black cursor-pointer" onClick={() => handleOrder("title")}>Nome {sortBy === "title" && sortIcon}</th>
            <th className="border py-1 border-black px-3 cursor-pointer" onClick={() => handleOrder("status")}>Stato {sortBy === "status" && sortIcon}</th>
            <th className="border py-1 border-black px-3 cursor-pointer" onClick={() => handleOrder("createdAt")}>Data di creazione {sortBy === "createdAt" && sortIcon}</th>
          </tr>
        </thead>
        <tbody className="bg-blue-200">
          {sortTasks.length > 0
            ? sortTasks.map((p) => (
              <Taskrow data={p} key={p.id} />
            )) : <tr><td colSpan="3">Nessun task</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}
