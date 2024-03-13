export inteFace Teacher {
  readonly firstName: String,
  readonlylastName: String,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: String,
  [index:string]: any,
}

export interFace Director extends Teacher {
  numberOfReport: number,
}
export interface printTeacherFunction {
  (firstName: String, lastName: String): String;
}
export function printTeacher(firstName: String, lastName: String): String {
  return `${firstName[0]}. ${lastName}`;
}

export interface IStudentClassConstructor {
  new (firstName: String, lastName: String): IStudentClass;
}

export interface IStudentClass {
  workOnHomework(): String;
  displayName(): String;
}

export class StudentClass implements IStudentClass {
  private _firstName!: String;
  private _lastName!: String;

  constructor(firstName: String, lastName: String) {
    this._firstName = firstName;
    this._lastName = lastName;
  }
  workOnHomework() {
    return 'Currently working';
  }
  displayName() {
    return this._firstName;
  }
}
