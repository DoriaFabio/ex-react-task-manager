import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "./pages/DefaultLayout"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/tasklist" Component={TaskList} />
          <Route path="/addtask" Component={AddTask} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
