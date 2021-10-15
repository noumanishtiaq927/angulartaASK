import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterDataServiceService } from 'src/app/service/filter/filter-data-service.service';
import { StudentDetailServiceService } from 'src/app/service/student/student-detail-service.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit, OnDestroy {
  studentDetail: any = [];
  filterofDate: any;
  public subs: Subscription | undefined;
  constructor(
    private _studentDetailService: StudentDetailServiceService,
    private filterservice: FilterDataServiceService
  ) {
    // this.filterservice.postfilterdate().subscribe((data: any) => {
    //   this.filterofDate = data;
    //   this.studentDetail = this.studentDetail.filter(
    //     (x: any) => x.joinDate === data
    //   );
    //   console.log(data);
    //   console.log(this.studentDetail);
    // });
  }

  ngOnInit(): void {
    this.studentDetail = this._studentDetailService.getStudentDetail();
    console.log('hi from student-data');
    this.subs = this.filterservice.postfilterdate().subscribe((data: any) => {
      this.filterofDate = data;
      this.studentDetail = this._studentDetailService.filterStudent(data);
      console.log(data);
      console.log(this.studentDetail);
    });
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
