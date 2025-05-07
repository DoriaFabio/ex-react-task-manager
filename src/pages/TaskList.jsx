import { useContext } from "react"
import { GlobalContext } from "../context/globalContext"


export default function TaskList() {
  const {tasks} = useContext(GlobalContext);
  console.log("Tasks:", tasks);
  
  return (
    <div className='my-5 mx-10'>
      <h1 className="font-bold text-2xl">Questa è la lista dei task</h1>
    </div>
  )
}
