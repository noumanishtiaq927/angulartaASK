import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public testData:any = []
   localitem:any
   newdata:any= []
  constructor() { }
  getData(){

    this.localitem = localStorage.getItem("testData")
    if(this.localitem == null){
      return  this.testData = []
    }else {
      return this.testData = JSON.parse(this.localitem)
    }
  }
  additem(data:any){
    console.log(data)
    this.localitem = localStorage.getItem("testData")
    console.log(this.localitem)
    console.log(this.testData)
    if(this.localitem == null){
      this.testData = []
      this.testData.push(data)
      console.log(data)
      localStorage.setItem("testData", JSON.stringify(this.testData))

    }else {
      this.testData = JSON.parse(this.localitem)
      this.testData.push(data)
      console.log(this.newdata)
      localStorage.setItem("testData", JSON.stringify(this.testData))

    }

  }
}
