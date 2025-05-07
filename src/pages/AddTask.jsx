import { useMemo } from "react";
import { useState, useRef } from "react"
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

export default function AddTask() {
  //! Campi controllati
  const [title, setTitle] = useState("");
  //! Campi non controllati
  const descRef = useRef();
  const statusRef = useRef();
  //! Funzione validazione titolo 
  const isTitleNotValid = useMemo(() => {
    const trimmedTitle = title.trim();
    return (
      trimmedTitle === "" ||
      symbols.split("").some(char => trimmedTitle.includes(char))
    )
  }, [title]);

  //! Funzione Submit
  const submit = (e) => {
    e.preventDefault();
    const descInput = descRef.current.value;
    const statusInput = statusRef.current.value;

    if (!descInput.trim() ||
      !statusInput.trim() ||
      !title.trim() ||
      isTitleNotValid) {
      alert("Errore: compila tutti i campi");
      return;
    } else {
      console.log(`Hai fatto il submit con:
          - Titolo: ${title};
          - Descrizione: ${descInput};
          - Stato: ${statusInput}`);
    }
  }

  return (
    <div className='flex flex-col items-center my-5'>
      <h1 className="font-bold text-2xl mb-5">Aggiungi una task</h1>
      <form onSubmit={submit} className='grid border border-black p-5 w-min'>
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
          className='border-2 p-2 m-2 bg-blue-700 hover:bg-blue-500 text-white border-black transition duration-500 ease-in-out'>
          Aggiungi task
        </button>
      </form>
    </div>
  )
}
