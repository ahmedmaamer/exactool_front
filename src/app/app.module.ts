import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ExacttoolComponent } from './exacttool/exacttool.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { TableDescriptionComponent } from './table-description/table-description.component';
import { MatTabsModule } from '@angular/material/tabs';
import { LandUseChangesComponent } from './land-use-changes/land-use-changes.component';
import { GrasslandAndLivestockComponent } from './grassland-and-livestock/grassland-and-livestock.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableDeforestationComponent } from './table-deforestation/table-deforestation.component';
import { TableAfforestationAndReforestationComponent } from './table-afforestation-and-reforestation/table-afforestation-and-reforestation.component';
import { TableOtherLandUseComponent } from './table-other-land-use/table-other-land-use.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { TableGrasslandOneComponent } from './table-grassland-one/table-grassland-one.component';
import { ForestManagementComponent } from './forest-management/forest-management.component';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login/login.component';

const keycloakService = new KeycloakService();

const keycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'exactool',
  clientId: 'exactool'
};

keycloakService.init({
  config: keycloakConfig,
  initOptions: {
  
    checkLoginIframe: false
  },
  bearerExcludedUrls: ['/assets', '/clients/public']
});


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    MatTabsModule,
    NgApexchartsModule, 
    KeycloakAngularModule

      
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ExacttoolComponent,
    ProjectDescriptionComponent,
    TableDescriptionComponent,
    LandUseChangesComponent,
    GrasslandAndLivestockComponent,
    ForestManagementComponent,
    TableDeforestationComponent,
    TableAfforestationAndReforestationComponent,
    TableOtherLandUseComponent,
    AuthenticationComponent,
    TableGrasslandOneComponent,
    HeroDetailComponent,
    LoginComponent,

  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
