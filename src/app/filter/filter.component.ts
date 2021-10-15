import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() datefilter =''
  @Output() dateofFilter = new EventEmitter()
  @Input() filterjoinDate:any =""
  constructor() { }

  ngOnInit(): void {
  }
showDate(){
  this.dateofFilter.emit(`${this.datefilter}`)
  console.log(this.datefilter)
}
}
