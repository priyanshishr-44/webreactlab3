import React, { useState } from "react";

const AddStudentForm = ({ addStudent }) => {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim().length < 4) {
            alert("Name must be at least 4 characters long");
            return;
        }
        const numericScore = Number(score);
        if (isNaN(numericScore) || numericScore < 0 || numericScore > 100) {
            alert("Score must be a number between 0 and 100");
            return;
        }
        addStudent(name.trim(), numericScore);
        setName("");
        setScore("");
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h3 className="form-title">Register New Student</h3>
            <div className="input-group">
                <input 
                    type="text" 
                    placeholder="Student Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Score (0-100)" 
                    value={score} 
                    onChange={(e) => setScore(e.target.value)}
                />
                <button type="submit" className="btn-primary">Add Row</button>
            </div>
        </form>
    );
};

export default AddStudentForm;