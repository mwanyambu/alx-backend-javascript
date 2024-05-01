const fs = require('fs');

function countStudents(filePath) {
  try {
    const fData = fs.readFileSync(filePath, 'utf8');
    const lines = fData.trim().split('\n');
    const studentCount = {};

    for (const line of lines) {
      const fields = line.split(',')
      if (fields.length === 1 && fields[0].trim() === '') {
        continue
      }
      const fieldName = fields[fields.length - 1];
      studentCount[fieldName] = (studentCount[fieldName] || 0) + 1;
    }
    console.log('Number of students:');
    for (const [field, count] of Object.entries(studentCount)) {
      console.log(`Number of students in ${field}: ${count}. List: ${lines.filter(line => line.endWith(field.split(' ').join(','))).map(line => line.split(',')[0]).join(', ')}`);
    } 
  } catch (error) {
    console.error("cannot load the database: ", error.message);
  }
}
module.exports = countStudents;