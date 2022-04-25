import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { InfoComponent } from './pages/info/info.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectComponent } from './pages/project/project.component';




const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'homepage',
  },
  {
    path: 'homepage',
    component: HomepageComponent,     
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },    
  {
    path: 'project',
    component: ProjectComponent,
  },  
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
