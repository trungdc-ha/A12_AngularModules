import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Student } from '../models/Student';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  private _students: Student[] = []


  // @ts-ignore
  getAllStudent(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(environment.api_url);
  }

  //  students(value: Student[]) {
  //   this._students = value;
  // }

  save(student:Student):Observable<Student>{
    return this._httpClient.post<Student>(environment.api_url, student);
  }

  // @ts-ignore
  getStudentByIndex(id: number):Observable<Student>{
    return this._httpClient.get<Student>(environment.api_url +"/" + id)
  }

}
