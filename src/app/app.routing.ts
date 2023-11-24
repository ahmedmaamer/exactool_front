import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ExacttoolComponent } from './exacttool/exacttool.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { LandUseChangesComponent } from './land-use-changes/land-use-changes.component';
import { GrasslandAndLivestockComponent } from './grassland-and-livestock/grassland-and-livestock.component';
import { ForestManagementComponent } from './forest-management/forest-management.component';
import { TableDeforestationComponent } from './table-deforestation/table-deforestation.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login/login.component';
const routes: Routes =[
  { path:'authentication',
  component:  AuthenticationComponent
  },
  { path:'login',
   component: LoginComponent} , 
 {
    path: '',
    component: AdminLayoutComponent,
    canActivate:[AuthGuard],
    children: [

      {
        path: 'exacttool',
        component: ExacttoolComponent
      },
      
      { path:'description',
      component:ProjectDescriptionComponent
      },

      { path:'landUseChanges',
      component: LandUseChangesComponent
      },
      { path:'grasslandAndLivestock',
      component: GrasslandAndLivestockComponent
      },

      { path: 'forestManagement',
      component:  ForestManagementComponent
      },
      { path:'tabDeforestation',
      component:  TableDeforestationComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo:"/authentication"
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
