import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailServiceService {
  public studentData = [
    { id: '1', name: 'Barry', age: 21, joinDate: '10/7/2020' },
    { id: '2', name: 'Oliver', age: 22, joinDate: '10/16/2019' },
    { id: '3', name: 'Ray', age: 20, joinDate: '8/12/2021' },
    { id: '4', name: 'Jay', age: 23, joinDate: '7/7/2021' },
    { id: '5', name: 'Mick', age: 24, joinDate: '5/7/2020' },
    { id: '6', name: 'Robin', age: 19, joinDate: '1/9/2021' },
  ];
  constructor() {}
  getStudentDetail() {
    return this.studentData;
  }
  filterStudent(filtevalue: any) {
    console.log(filtevalue);
    return this.studentData.filter(
      (x: any) => x.joinDate === <string>(<any>filtevalue)
    );
  }
}
