import React, { useState } from "react";
import Header from "./Components/Header";
import StudentTable from "./Components/StudentTable";
import AddStudentForm from "./Components/AddStudentForm";
import SummaryTable from "./Components/SummaryTable";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (name, score) => {
    setStudents([...students, { name, score }]);
  };

  const updateScore = (index, newScore) => {
    const updatedStudents = [...students];
    updatedStudents[index].score = newScore;
    setStudents(updatedStudents);
  };

  return (
    <div className="app-container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
      <SummaryTable students={students} />
    </div>
  );
};

export default App;