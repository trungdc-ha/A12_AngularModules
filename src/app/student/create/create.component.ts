import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentService} from "../service/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // @ts-ignore
  rfStudent: FormGroup;


  constructor(private _formBuilder: FormBuilder,
              private _studentService: StudentService,
              private _router: Router) {
  }

  ngOnInit(): void {
    // *sử dụng formBuilder*/
    this.rfStudent = this._formBuilder.group({
      name: ['Hoa', [Validators.required]],
      gender: [1],
      point: [90]
    });

    /*Sử dụng FormGroup*/
    // this.rfStudent = new FormGroup({
    //   studentName : new FormControl("Anh"),
    //   studentGender: new FormControl(),
    //   studentPoint: new FormControl(),
    // })

  }

  onSubmit() {
    console.log(this.rfStudent);
    if (this.rfStudent.valid) {
      this._studentService.save(this.rfStudent.value).subscribe(
        data => {
          console.log(data)
          this._router.navigateByUrl("/home");
        }
      );
    }
  }
}
