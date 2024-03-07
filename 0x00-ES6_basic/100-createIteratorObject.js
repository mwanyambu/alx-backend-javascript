export default function* createIteratorObject(report) {
  if (!report || !report.allEmployees || typeof report.allEmployees !== 'object') {
    throw new Error('Invalid report object');
  }

  for (const department in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
      const employeesInDepartment = report.allEmployees[department];

      if (!Array.isArray(employeesInDepartment)) {
        throw new Error(`Invalid employee list for department: ${department}`);
      }

      for (const employee of employeesInDepartment) {
        yield employee;
      }
    }
  }
}
