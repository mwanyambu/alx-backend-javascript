export default function* createIteratorObject(report) {
  const { allEmployees } = report;

  for (const department in allEmployees) {
    const employeesInDepartment = allEmployees[department];

    for (const employee of employeesInDepartment) {
      yield employee;
    }
  }
}
