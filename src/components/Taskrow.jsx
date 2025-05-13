import React from "react";
import { Link } from "react-router-dom";

const Taskrow = React.memo(({ data }) => {
    return (
        <tr>
            <td className="border p-2 hover:bg-blue-300 transition duration-500 ease-in-out"><Link to={`/task/${data.id}`}>{data.title}</Link></td>
            <td className="border p-2 text-center"
                style={{background: data.status === "To do" ? "#ff4040" : data.status === "Doing" ? "#ffff50" : "#00c000"}}>
                {data.status}
            </td>
            <td className="border p-2 hover:bg-blue-300 transition duration-500 ease-in-out text-center">{new Date(data.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

Taskrow.displayName = "Taskrow";

export default Taskrow;