export default function getStudentsByLocation(studentList, city) {
  const studentsByLocation = studentList.filter(student => student.location === city);
  return studentsByLocation;
}
