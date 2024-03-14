namespace Subjects {
  export interface Teacher {
    experienceTeaching?: number;
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
      return "Here is a list of requirements for React";
    }
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
        return "No available Teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
