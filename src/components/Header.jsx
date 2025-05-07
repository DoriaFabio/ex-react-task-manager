import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className='bg-gray-800 text-white p-5'>
            <NavLink to="/" className="mx-1 sm:mx-3 hover:bg-gray-900 p-3 rounded-xl text-[13px] sm:text-[16px]">
                Home
            </NavLink>
            <NavLink to="/addTask" className="mx-1 sm:mx-3 hover:bg-gray-900 p-3 rounded-xl text-[13px] sm:text-[16px]">
                Aggiungi Task
            </NavLink>
            <NavLink to="/tasklist" className="mx-1 sm:mx-3 hover:bg-gray-900 p-3 rounded-xl text-[13px] sm:text-[16px]">
                Lista Task
            </NavLink>
        </header>
    )
}
