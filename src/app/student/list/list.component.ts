import { Component, OnInit } from '@angular/core';
import {Student} from "../models/Student";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  student:Student | undefined;

  students: Student[] | undefined;
  /*DI*/
  constructor(private _studentService:StudentService, private _router:Router) {

  }

  ngOnInit(): void {
    this._studentService.getAllStudent().subscribe(
      data => { //thành công
        this.students = data
      }, error => {
        console.log("Lay danh sách that bai")
      } , () => {
        console.log("Ket thuc lay danh sach")
      }
    )
  }

  showDetail(index:number) {
    this._router.navigate(['detail', index]);
  }

  getNewStudent(value: Student) {
    this._studentService.save(value);
  }

}
