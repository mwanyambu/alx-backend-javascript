const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('cannot load the database'));
    }
    if (data) {
      const fields = data
        .toString('utf-8')
        .trim()
        .split('\n');
      const groups = {};
      const fieldNames = fields[0].split(',');
      const studentNames = fieldNames.slice(0, fieldNames.length - 1);

      for (const line of fields.slice(1)) {
        const studentRecord = line.split(',');
        const vals = studentRecord.slice(0, studentRecord.length - 1);
        const colm = studentRecord[studentRecord.length - 1];
        if (!Object.keys(groups).includes(colm)) {
          groups[colm] = [];
        }
        const entries = studentNames.map((sName, i) => [sName, vals[i]]);
        groups[colm].push(Object.fromEntries(entries));
      }
      const totalNum = Object
        .values(groups)
        .reduce((pre, cur) => (pre || []).length + cur.length);
      console.log(`Number of students: ${totalNum}`);
      for (const [colm, group] of Object.entries(groups)) {
        const names = group.map((s) => s.firstname).join(', ');
        console.log(`Number of students in ${colm}: ${group.length}. List: ${names}`);
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
