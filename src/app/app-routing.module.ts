import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontAppComponent } from './front-app/front-app.component';

const routes: Routes = [
  { path: 'frontApp', component: FrontAppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
