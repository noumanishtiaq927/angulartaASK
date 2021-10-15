import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAirTable } from 'src/app/interface/dataairtable';
import { IJsonPlaceHolder } from 'src/app/interface/jsonplaceholder';

@Injectable({
  providedIn: 'root'
})
export class HttpDemoServiceService {
  url:string ='https://v1.nocodeapi.com/software_lcs_net/airtable/lIMKcwUHRnsAwiqA?tableName=SA00_Tab1_Users&api_key=zdvYxKTSPqgtDTYmI'
  constructor(private http:HttpClient) { }
  getData(): Observable<IAirTable[]>{
    return this.http.get<IAirTable[]>(this.url)
  }
}
