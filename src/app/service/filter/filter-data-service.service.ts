import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StudentDetailServiceService } from '../student/student-detail-service.service';

@Injectable({
  providedIn: 'root',
})
export class FilterDataServiceService {
  datefilterr: any = new Subject<string>();
  newdata: any = [];
  // datefilter: any = new Subject<any>();
  constructor(private studentservice: StudentDetailServiceService) {}
  getfilterdate(filtervalue: any) {
    this.newdata = new Date(filtervalue).toLocaleDateString();
    this.datefilterr.next(this.newdata);
    console.log(this.datefilterr);
  }

  postfilterdate(): Observable<any> {
    return this.datefilterr.asObservable();
  }
  // filterdatastudent() {
  //   this.datefilterr.next(this.datefilterr);
  //   this.newdata = this.studentservice.studentData.filter(
  //     (x) => x.joinDate === this.datefilterr
  //   );
  //   console.log(this.newdata);
  //   return this.newdata;
  // }
}
