import { createContext } from "react";
import useTasks from "../hooks/useTasks";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const TaskData = useTasks();
    return (
        <GlobalContext.Provider value={{ ...TaskData }}>
            {children}
        </GlobalContext.Provider>
    )
}