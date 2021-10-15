import { Component, Input, OnInit } from '@angular/core';
import { StudentDetailServiceService } from 'src/app/service/student/student-detail-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public studentDetail:any = []
  public studentDetaill:any = []
  public newStudentDetail:any=[]
  public newfilterdatee:any='10/16/2019'
  public newfilterdaatee:any=''
  @Input() public filteronDate:any=''
  @Input() searchField=''
  public datefilterr = ''
  constructor(private _studentDetailService: StudentDetailServiceService) {

   }

  ngOnInit(): void {
    this.studentDetail = this._studentDetailService.getStudentDetail()
  }
ngOnChanges(): any {
  this.newfilterdaatee = new Date(this.filteronDate).toLocaleDateString()
  console.log(this.filteronDate)
  console.log(this.studentDetail)
  console.log(this.searchField + 'searchField')
  const namenew = this.searchField
  this.studentDetaill = this.studentDetail.filter((x:any) => x.joinDate === this.newfilterdaatee)
  this.studentDetaill = this.studentDetail.filter((x:any) => x.name === /namenew/i)
  this.studentDetaill = this._studentDetailService.filterStudent(this.searchField)
console.log(this.datefilterr + 'this.datefilterr')
console.log('filteronDate'+ this.newfilterdaatee)
  console.log(this.studentDetaill)
  console.log(namenew)
  // this.studentDetail=this.studentDetaill
  return this.studentDetail
}
ngDoCheck(){
  let n = 0;
  console.log('do check' + (n++))
}
// ngDoCheck(){
//   this.studentDetail = this.studentDetail.filter((x:any)=>x.joinDate === this.newfilterdaatee)
//   console.log(this.newfilterdaatee)
//   console.log(this.studentDetail)
//   return this.studentDetail
// }
  newfilterdate($event:any){
    this.newfilterdatee=$event
    this.filteronDate = new Date(this.newfilterdatee).toLocaleDateString()
    console.log(this.filteronDate)
    console.log(this.studentDetail)
    this.studentDetail = this.studentDetail.filter((x:any) => x.joinDate === this.filteronDate)

    console.log(this.studentDetail)
    return this.studentDetail
  }
}
