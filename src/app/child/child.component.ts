import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input('parentData') public name:any;
  public anything:any=''

  @Output() public childEvent = new EventEmitter()
  constructor() { }

  firstEvent() {
    this.childEvent.emit(` ${this.anything}`)
  }
  ngOnInit(): void {
  }

}
