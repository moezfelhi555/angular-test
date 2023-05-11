import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {VideoComponent} from "./video/video.component";

const routes: Routes = [
  {
    path: '', component: MenuComponent,
  children : [
    {path: 'add', component : VideoComponent ,
    },

  ]


    ,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
