import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name = 'Nouman Ishtiaq'
  message =""
firsttext=""
  constructor() { }

  ngOnInit(): void {
  }
submitData(){
  this.name=this.firsttext
}
}
