import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterDataServiceService } from 'src/app/service/filter/filter-data-service.service';

@Component({
  selector: 'app-parent-filter',
  templateUrl: './parent-filter.component.html',
  styleUrls: ['./parent-filter.component.css'],
})
export class ParentFilterComponent implements OnInit {
  datefilterr = new Subject();
  datefilter = '';
  dateofFilter = new EventEmitter();
  filterjoinDate: any = '';
  search = '';
  constructor(private filterservice: FilterDataServiceService) {}

  ngOnInit(): void {}
  showDate() {
    this.filterservice.getfilterdate(this.datefilter);
  }
}
