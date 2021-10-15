import { Component, OnInit } from '@angular/core';
import { HttpDemoServiceService } from '../service/httpDemo/http-demo-service.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
public getDataa:any =[]
public getData:any =[]
  constructor(private httpDemoService: HttpDemoServiceService) { }

  ngOnInit(): void {
    this.httpDemoService.getData().subscribe(data =>{ this.getDataa = data;
       this.getData =this.getDataa.records
       console.log(this.getData)
      })

  }

}
