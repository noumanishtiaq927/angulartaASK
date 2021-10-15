import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { StudentDetailServiceService } from './service/student/student-detail-service.service';
import { TeacherDetailServiceService } from './service/teacher/teacher-detail-service.service';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './filter/filter.component';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { ParentFilterComponent } from './parent-filter/parent-filter/parent-filter.component';
import { AllDataComponent } from './data/all-data/all-data.component';
import { AddDataComponent } from './data/add-data/add-data.component';
import { DataServiceService } from './service/data/data-service.service';
import { RouterModule } from '@angular/router';
import { TeacherDataComponent } from './teacher/teacher-data/teacher-data.component';
import { StudentDataComponent } from './student/student-data/student-data.component';
import { FilterDataServiceService } from './service/filter/filter-data-service.service';


export class ServiceNameService {
  constructor() { }

}


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    StudentListComponent,
    TeacherListComponent,
    FilterComponent,
    HttpDemoComponent,
    ParentFilterComponent,
    AllDataComponent,
    AddDataComponent,
    TeacherDataComponent,
    StudentDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [
    StudentDetailServiceService, 
    TeacherDetailServiceService ,
    DataServiceService,
    FilterDataServiceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
