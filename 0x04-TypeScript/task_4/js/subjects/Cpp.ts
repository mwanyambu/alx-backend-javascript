namespace Subjects {
  export interface Teacher {
    experienceTeaching?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return "Here is a list of requirements for CPP";
    }
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return "No available Teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
