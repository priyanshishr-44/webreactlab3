import React, { useState } from "react";

const StudentRow = ({ student, index, updateScore }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editScore, setEditScore] = useState("");

    const handleEditClick = () => {
        setIsEditing(true);
        setEditScore(student.score);
    };

    const handleSaveClick = () => {
        const newScore = Number(editScore);
        if (!isNaN(newScore) && newScore >= 0 && newScore <= 100) {
            updateScore(index, newScore);
            setIsEditing(false);
        } else {
            alert("Score must be a number between 0 and 100");
        }
    };

    return (
        <tr>
            <td>{student.name}</td>
            <td style={{ color: "#38bdf8", fontWeight: "600" }}>{student.score}</td>
            <td>
                <span className={`status-badge ${student.score >= 40 ? "status-pass" : "status-fail"}`}>
                    {student.score >= 40 ? "PASS" : "FAIL"}
                </span>
            </td>
            <td>
                {isEditing ? (
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input 
                            type="number" 
                            value={editScore} 
                            onChange={(e) => setEditScore(e.target.value)} 
                            style={{ width: "60px", marginRight: "10px", padding: "6px" }}
                        />
                        <button className="btn-action" onClick={handleSaveClick}>Save</button>
                        <button className="btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                ) : (
                    <button className="btn-action" onClick={handleEditClick}>Edit</button>
                )}
            </td>
        </tr>
    );
};

export default StudentRow;