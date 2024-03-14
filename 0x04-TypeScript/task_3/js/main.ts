import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
const updatdRow: RowElement = {...row, age: 23}
CRUD.updatedRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
