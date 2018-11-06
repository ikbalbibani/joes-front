import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { PageAdminComponent } from './page-admin/page-admin.component';
import {HttpClientModule} from '@angular/common/http';
import { GestionComponent } from './gestion/gestion.component';
import {AuthGuard} from './auth.guard';
import { AjouterEmpComponent } from './ajouter-emp/ajouter-emp.component';
import { ModifierEmpComponent } from './modifier-emp/modifier-emp.component';
import { DossierAdminComponent } from './dossier-admin/dossier-admin.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageAdminComponent,
    GestionComponent,
    AjouterEmpComponent,
    ModifierEmpComponent,
    DossierAdminComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: PageAdminComponent,
        canActivate : [AuthGuard],
        children: [{
          path : 'gestion',
          component: GestionComponent
        }, {
          path: 'ajouter',
          component : AjouterEmpComponent
        }, {
          path: 'modifier/:id',
          component : ModifierEmpComponent
        },  {
          path: 'dossier',
          component : DossierAdminComponent
        }, {
          path: 'details/:id',
          component : DetailsComponent
        }
        ]

      }


    ]), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
