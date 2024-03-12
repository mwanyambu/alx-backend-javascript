export default function updateStudentGradeByCity(studentData, city, newGrades) {
  const studentsByCity = studentData.filter((student) => student.location === city);
  const studentGrades = studentsByCity.map((student) => {
    const grades = newGrades.find((grade) => grade.studentId === student.id);
    const grade = grades ? grades.grade : 'N/A';
    return { ...student, grade };
  });
  return studentGrades;
}
