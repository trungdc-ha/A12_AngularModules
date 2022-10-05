import { Component, OnInit } from '@angular/core';
import {Student} from "../models/Student";
import { StudentService } from '../service/student.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  studentDetail: Student | undefined;

  constructor(private _studentService: StudentService,
              private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {

    let id = this._activatedRouter.snapshot.params['id'];
    console.log(id);
    this._studentService.getStudentByIndex(id).subscribe(
      value => {
        this.studentDetail = value;
      } )
  }

}
