import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import HomePage from "./pages/HomePage"
import { GlobalProvider } from "./context/globalContext"
import TaskDetails from "./pages/TaskDetails"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/tasklist" Component={TaskList} />
            <Route path="/task/:id" Component={TaskDetails} />
            <Route path="/addtask" Component={AddTask} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  )
}

export default App
