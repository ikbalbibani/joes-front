import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { PageAdminComponent } from './page-admin/page-admin.component';
import {HttpClientModule} from '@angular/common/http';
import { GestionComponent } from './gestion/gestion.component';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageAdminComponent,
    GestionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: PageAdminComponent,
        canActivate : [AuthGuard]
      }

    ]), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
