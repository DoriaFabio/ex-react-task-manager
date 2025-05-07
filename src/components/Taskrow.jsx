import React from "react";

const Taskrow = React.memo(({ data }) => {
    return (
        <tr>
            <td className="border p-2">{data.title}</td>
            <td className="border p-2"
                style={{background: data.status === "To do" ? "#ff4040" : data.status === "Doing" ? "#ffff50" : "#00c000"}}>
                {data.status}
            </td>
            <td className="border p-2">{new Date(data.createdAt).toLocaleDateString()}</td>
        </tr>
    );
});

Taskrow.displayName = "Taskrow";

export default Taskrow;