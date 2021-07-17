import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NbThemeModule, NbLayoutModule, NbCardModule,
  NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule,
  NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbDatepickerModule,  } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
//import { NbDateFnsDateModule } from '@nebular/date.';
import { PruebaComponent } from './pages/nivel/components/forms/prueba/prueba.component';
import { Prueba1Component } from './pages/nivel/components/forms/prueba1/prueba1.component';
import { Prueba2Component } from './pages/nivel/components/forms/prueba2/prueba2.component';
import { Prueba3Component } from './pages/nivel/components/forms/prueba3/prueba3.component';
import { ThemeModule } from './@theme/theme.module';
///import { SeccionNewComponent } from './pages/seccion/components/forms/seccion-new/seccion-new.component';
//import { SeccionEditComponent } from './pages/seccion/components/forms/seccion-edit/seccion-edit.component';
//import { SeccionListComponent } from './pages/seccion/components/list/seccion-list/seccion-list.component';
//import { SeccionComponent } from './pages/seccion/container/seccion/seccion.component';







@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot({ closeOnEsc: false, closeOnBackdropClick: false }),
    NbUserModule,
    NbActionsModule,
    NbContextMenuModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbSpinnerModule,
    NbDatepickerModule.forRoot(),
    ThemeModule.forRoot(),
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PruebaComponent,
    Prueba1Component,
    Prueba2Component,
    Prueba3Component,
    /*SeccionNewComponent,
    SeccionEditComponent,
    SeccionListComponent,
    SeccionComponent,*/
   
    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
