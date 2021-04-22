import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared-component/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'student', loadChildren: './student/student.module#StudentModule'},
  { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherModule'},
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
