import { GlobalContext } from "../context/globalContext"
import { useState, useRef, useMemo, useContext } from "react"
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {
  const {AddTask} = useContext(GlobalContext); // Importo la funzione AddTask dal contesto globale
  //! Campi controllati
  const [title, setTitle] = useState(""); 
  //! Campi non controllati
  const descRef = useRef();
  const statusRef = useRef(); 
  //! Funzione validazione titolo 
  const isTitleNotValid = useMemo(() => { // useMemo per evitare calcoli inutili
    const trimmedTitle = title.trim(); // Rimuovo gli spazi vuoti all'inizio e alla fine del titolo
    return (
      trimmedTitle === "" || // Controllo se il titolo è vuoto
      symbols.split("").some(char => trimmedTitle.includes(char))  // Controllo se il titolo contiene simboli
    ) 
  }, [title]); 

  //! Funzione Submit
  const submit = async (e) => { // Funzione asincrona per gestire l'invio del form
    e.preventDefault();
    let descInput = descRef.current.value;
    let statusInput = statusRef.current.value;
    if (!statusInput.trim() ||
      !title.trim() ||
      isTitleNotValid) { // Controllo se i campi sono vuoti o se il titolo non è valido
      alert("Errore: compila tutti i campi"); // Mostro un alert di errore
      return; 
    } else {
      const newTask = { // Creo un oggetto con i dati della nuova task
        title: title.trim(),
        description: descInput,
        status: statusInput
      }
      try { // Provo a eseguire la funzione AddTask
        await AddTask(newTask); // Passo l'oggetto newTask alla funzione AddTask
        alert("Task creata con successo");
        setTitle(""); // Resetto il titolo
        descInput = ""; // Resetto la descrizione
        statusInput = ""; // Resetto lo stato
      } catch (err) {
        alert(err.message); // Mostro un alert con il messaggio di errore
      }
    }
  }

  return (
    <div className='flex flex-col items-center my-5'>
      <h1 className="font-bold text-2xl mb-5">Aggiungi una task</h1>
      <form onSubmit={submit} className='grid border border-black p-5 w-min shadow-xl'>
        {/* Nome task */}
        <section>
          <h2 className="text-center">Nome task</h2>
          <input type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-1'
          />
          {/* Validazione Nome */}
          {(
            <p style={{ color: isTitleNotValid ? "red" : "green" }} className='block text-center text-[14px]'>
              {isTitleNotValid ? "Inserire un titolo senza simboli" : "Titolo valido"}
            </p>
          )}
        </section>
        {/* Descrizione task */}
        <section>
          <h1 className="text-center">Descrizione task</h1>
          <textarea
            ref={descRef}
            className="p-2 border m-1 h-[140px]"
            placeholder="Scrivi...">
          </textarea>
        </section>
        {/* Stato task */}
        <section>
          <h1 className='text-center'>Stato</h1>
          <select
            ref={statusRef}
            className='p-2 border m-1'>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </section>
        <button type="submit"
          className='border p-2 m-2 rounded-md bg-blue-700 hover:bg-blue-500 
          text-white border-black transition duration-500 ease-in-out 
          disabled:bg-blue-400 disabled:cursor-not-allowed'
          disabled={isTitleNotValid}> 
          Aggiungi task
        </button>
      </form>
    </div>
  )
}
