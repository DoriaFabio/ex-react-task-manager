import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-gray-800 text-white p-5'>
            <NavLink to="/" className="mx-3">
                Home
            </NavLink>
            <NavLink to="/addTask" className="mx-3">
                Aggiungi Task
            </NavLink>
            <NavLink to="/tasklist" className="mx-3">
                Lista Tag
            </NavLink>
        </header>
    )
}
