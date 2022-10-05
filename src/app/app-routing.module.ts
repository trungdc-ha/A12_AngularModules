import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./student/create/create.component";
import {ListComponent} from "./student/list/list.component";
import {DetailComponent} from "./student/detail/detail.component";

const routes: Routes = [
  // {
  //   path: 'student',
  //   component:ListComponent,
  //   children: [
  //     {path: "create", component:CreateComponent},
  //     {path: "detail/:index", component:DetailComponent},
  //   ]
  // },

  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
