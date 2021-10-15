import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterDataServiceService } from 'src/app/service/filter/filter-data-service.service';
import { TeacherDetailServiceService } from 'src/app/service/teacher/teacher-detail-service.service';

@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css'],
})
export class TeacherDataComponent implements OnInit, OnDestroy {
  teacherDetail: any = [];
  filterofDate: any;
  subs: Subscription | undefined;
  constructor(
    private _teacherDetailService: TeacherDetailServiceService,
    private filterservice: FilterDataServiceService
  ) {}

  ngOnInit(): void {
    this.teacherDetail = this._teacherDetailService.getTeacherDetail();
    this.subs = this.filterservice.postfilterdate().subscribe((data: any) => {
      this.filterofDate = data;
      this.teacherDetail = this._teacherDetailService.filterTeacher(data);
      console.log(data);
      console.log(this.teacherDetail);
    });
  }
  ngOnDestroy() {
    this.subs?.unsubscribe();
  }
}
