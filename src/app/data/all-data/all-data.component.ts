import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {
  showData:boolean = true;
  localItems:any
  testData:any=[]


  constructor(private dataservice: DataServiceService){


  }

  ngOnInit(): void {
    this.testData=this.dataservice.getData()
    console.log(this.testData)
  }
toggleState(){
  this.showData = !this.showData
  console.log(this.showData)
}

}
