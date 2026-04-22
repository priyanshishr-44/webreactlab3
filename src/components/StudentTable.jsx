import React from "react";
import StudentRow from "./StudentRow";

const StudentTable = ({ students, updateScore }) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
                    <tr>
                        <th>Student Name</th>
                        <th>Score (0-100)</th>
                        <th>Pass/Fail Status</th>
                        <th>Quick Update</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map((student, index) => (
                            <StudentRow 
                                key={index} 
                                index={index} 
                                student={student} 
                                updateScore={updateScore} 
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center", fontStyle: "italic", color: "#64748b" }}>
                                No students added yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default StudentTable;