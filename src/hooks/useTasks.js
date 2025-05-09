import { useState, useEffect} from "react";
const { VITE_API_URL } = import.meta.env;

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${VITE_API_URL}/tasks`) // Fetch all tasks from the API
            .then(res => res.json()) // Parse the response as JSON
            .then(data => setTasks(data)) // Set the tasks state with the fetched data
            .catch(err => console.error(err))
    }, [])

    const AddTask = async newTask => {
        const res = await fetch(`${VITE_API_URL}/tasks`, { // Send a POST request to the API to add a new task
            method: "POST",
            headers: { "Content-Type": "application/json" }, // Set the content type to JSON
            body: JSON.stringify(newTask) // Convert the new task object to a JSON string
        });
        const { success, message, task } = await res.json(); // Parse the response as JSON
        if (!success) throw new Error(message); // If the request was not successful, throw an error with the message from the response
        setTasks(prev => [...prev, task]); // Update the tasks state with the new task
    }

    const RemoveTask = async taskId => {
        const res = await fetch(`${VITE_API_URL}/tasks/${taskId}`, {
            method: "DELETE",
        });
        const { success, message } = await res.json(); // Parse the response as JSON
        if (!success) throw new Error(message); // If the request was not successful, throw an error with the message from the response
        setTasks(prev => prev.filter(t => t.id !== taskId))
    }

    const UpdateTask = () => {

    }

    return { tasks, AddTask, RemoveTask, UpdateTask }
}