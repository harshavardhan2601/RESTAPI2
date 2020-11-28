import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableCurdComponent } from './table-curd/table-curd.component';

const routes: Routes = [
  {path:'', component:TableCurdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
