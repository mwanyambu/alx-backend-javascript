const express = require('express');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = express();
const APP_DATA = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const fields = data.toString('utf-8').trim().split('\n');
        const groups = {};
        const fNames = fields[0].split(',');
        const studentNames = fNames.slice(0, fNames.length - 1);

        for (const line of fields.slice(1)) {
          const sRecords = line.split(',');
          const sValues = sRecords.slice(0, sRecords.length - 1);
          const colm = sRecords[sRecords.length - 1];
          if (!Object.keys(groups).includes(colm)) {
            groups[colm] = [];
          }
          const newEntries = studentNames.map((sName, index) => [sName, sValues[index]]);
          groups[colm].push(Object.fromEntries(newEntries));
        }
        const totalStudents = Object.values(groups).reduce(
          (pre, curr) => (pre || []).length + curr.length,
        );
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [colm, gp] of Object.entries(groups)) {
          reportParts.push(`Number of students in ${colm}: ${gp.length}. List: ${gp.map((s) => s.firstname).join(', ')}`);
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});
const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(APP_DATA)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
