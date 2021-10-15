import { Component, Input, OnInit } from '@angular/core';
import { TeacherDetailServiceService } from 'src/app/service/teacher/teacher-detail-service.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {
public teacherDetail:any = []
public newTeacherDetail:any = []
public newfilterdatee:any=''
@Input() public filteronDate:any=''
@Input('datefilter') globalFilter:any= ''
@Input() searchField=''
  constructor( private _teacherDetailService: TeacherDetailServiceService) { }

  ngOnInit(): void {
    this.teacherDetail = this._teacherDetailService.getTeacherDetail()
    console.log('calling.....on iit')
  }
  ngOnChanges(){
    this.filteronDate = new Date(this.filteronDate).toLocaleDateString()
    console.log(this.filteronDate)
    console.log(this.teacherDetail)
    this.changeData(this.filteronDate)
    // this.teacherDetail = this.teacherDetail.filter((x:any) => x.joinDate === this.filteronDate)

    // console.log(this.teacherDetail)
    // return this.teacherDetail
  }
  changeData(newdate:any){
    this.teacherDetail = this.teacherDetail.filter((x:any) => x.joinDate === newdate)

    console.log('changeData' + newdate)
    console.log('changeData' + this.teacherDetail)
    return this.teacherDetail
  }

newfilterdate($event:any){
  this.newfilterdatee=$event
  this.filteronDate = new Date(this.newfilterdatee).toLocaleDateString()
  console.log(this.filteronDate)
  console.log(this.teacherDetail)
  this.teacherDetail = this.teacherDetail.filter((x:any) => x.joinDate === this.filteronDate)
console.log('globalFilter' + this.globalFilter)
  console.log(this.teacherDetail)
  return this.teacherDetail

}
}
