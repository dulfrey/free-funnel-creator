import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorComponent } from './modules/creator/creator.component';
import { ViewerComponent } from './viewer/viewer.component';


const routes: Routes = [
  { path: 'maker', component: CreatorComponent },
  { path: 'viewer', component: ViewerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
