export default function getStudentIdsSum(studentData) {
  const total = studentData.reduce((accumulator, student) => accumulator + student.id, 0);
  return total
}
