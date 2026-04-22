import React from "react";

const SummaryTable = ({ students }) => {
    const totalStudents = students.length;
    const totalPassed = students.filter(student => student.score >= 40).length;
    
    const totalScore = students.reduce((sum, student) => sum + student.score, 0);
    const averageScore = totalStudents === 0 ? 0 : (totalScore / totalStudents).toFixed(2);

    return (
        <div style={{ marginTop: "30px" }}>
            <div className="summary-cards">
                <div className="card">
                    <div className="card-title">Total Students</div>
                    <div className="card-value">{totalStudents}</div>
                </div>
                <div className="card">
                    <div className="card-title">Total Passed</div>
                    <div className="card-value highlight">{totalPassed}</div>
                </div>
                <div className="card">
                    <div className="card-title">Average Score</div>
                    <div className="card-value">{averageScore}</div>
                </div>
            </div>
        </div>
    );
};

export default SummaryTable;