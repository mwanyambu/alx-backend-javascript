export default function getListStudentIds(Idarray) {
  if (!Array.isArray(Idarray)) {
    return [];
  }
  const Ids = Idarray.map(student => student.id);
  return Ids;
}
