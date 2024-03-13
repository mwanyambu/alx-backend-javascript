export interface Student {
    firstName: String;
    lastName: String;
    age: number;
    location: String;
}

const student1: Student = {
    firstName: "John",
    lastName: "Mwanyasi",
    age: 40,
    location: "Nairobi"
};

const student2: Student = {
    firstName: "Lucas"
    lastName: "Mwanyambu"
    age: 17,
    location: "Nairobi"
};

const studentsList: Student[] = [student1, student2];

/**
 * - Render using vanilla javascript
 */

export const renderTable = (studentsList: Array<Student>): void => {
  const table = document.createElement('table');
  const headRow = document.createElement('tr');
  table.inserAdjacentElement('beforeend', headRow);

  headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
  headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');

  for (const student of studentsList) {
    const studentRow = document.createElement('tr')
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.firtsNmae}</td>`);
    studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    table.insertAdjacentElement('beforeend', studentRow);
  }
  document.body.insertAdjacentElement('beforeend', table);
}
renderTable(studentsList);
