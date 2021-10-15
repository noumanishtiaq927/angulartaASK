import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data/data-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  id?:number;
  name?:string;
  localItem?:string |null
  testData:any


  constructor(private dataservice:DataServiceService, private router: Router) {

   }

  ngOnInit(): void {
  }

  onSubmit(){
    const testDataAdd ={

      id: this.id,
      name: this.name,

    }

    this.dataservice.additem(testDataAdd)
    this.router.navigate(['/alldata'])


  }

}



