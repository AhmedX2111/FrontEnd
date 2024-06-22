import { Component } from '@angular/core';

// Subject interface
interface Subject {
  subject: string;
  grade: string;
  credit: number;
}

@Component({
  selector: 'app-cgpa-calculator',
  templateUrl: './cgpa-calculator.component.html',
  styleUrls: ['./cgpa-calculator.component.css'],
})
export class CGPACalculatorComponent {
  subjects: Subject[] = [];
  subjectInput: string = ''; // Initialize as string
  creditInput: number = 0; // Initialize as number
  gradeInput: string = 'A';
  editIndex: number = -1;

  grades = [
    { label: 'A+', value: 'A+' },
    { label: 'A', value: 'A' },
    { label: 'A-', value: 'A-' },
    { label: 'B+', value: 'B+' },
    { label: 'B', value: 'B' },
    { label: 'B-', value: 'B-' },
    { label: 'C+', value: 'C+' },
    { label: 'C', value: 'C' },
    { label: 'C-', value: 'C-' },
    { label: 'D+', value: 'D+' },
    { label: 'D', value: 'D' },
    { label: 'D-', value: 'D-' },
    { label: 'F', value: 'F' },
  ];

  addSubject() {
    const newSubject: Subject = {
      subject: this.subjectInput,
      grade: this.gradeInput,
      credit: this.creditInput,
    };

    if (this.editIndex !== -1) {
      this.subjects[this.editIndex] = newSubject;
      this.editIndex = -1;
    } else {
      this.subjects.push(newSubject);
    }

    this.calculateCGPA();
    this.clearForm();
  }

  editSubject(index: number) {
    const selectedSubject = this.subjects[index];
    this.subjectInput = selectedSubject.subject;
    this.gradeInput = selectedSubject.grade;
    this.creditInput = selectedSubject.credit;
    this.editIndex = index;
  }

  deleteSubject(index: number) {
    this.subjects.splice(index, 1);
    this.calculateCGPA();
  }

  calculateCGPA(): string {
    const totalCredits = this.subjects.reduce((sum, s) => sum + s.credit, 0);
    const weightedSum = this.subjects.reduce(
      (sum, s) => sum + this.getGradePoint(s.grade) * s.credit,
      0
    );

    let cgpa = totalCredits === 0 ? 0 : (weightedSum / totalCredits).toFixed(2);
    // cgpa = Math.min(parseFloat(cgpa), 4.0);
    return cgpa.toString();
  }

  getGradePoint(grade: string): number {
    switch (grade) {
      case 'A+':
      case 'A':
        return 4.0;
      case 'A-':
        return 3.7;
      case 'B+':
        return 3.3;
      case 'B':
        return 3.0;
      case 'B-':
        return 2.7;
      case 'C+':
        return 2.3;
      case 'C':
        return 2.0;
      case 'C-':
        return 1.7;
      case 'D+':
        return 1.3;
      case 'D':
        return 1.0;
      case 'D-':
        return 0.7;
      case 'F':
        return 0.0;
      default:
        return 0.0;
    }
  }

  clearForm() {
    this.subjectInput = '';
    this.gradeInput = 'A';
    this.creditInput = 1; // Reset to initial value
  }

  resetForm() {
    this.subjects = [];
    this.editIndex = -1;
    this.clearForm();
  }
}
