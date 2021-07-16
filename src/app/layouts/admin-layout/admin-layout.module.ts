import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ClipboardModule} from 'ngx-clipboard';

import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {UserProfileComponent} from '../../pages/user-profile/user-profile.component';
import {TablesComponent} from '../../pages/tables/tables.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule, NbCardModule,
  NbSidebarModule, NbMenuModule, NbUserModule, NbActionsModule,
  NbContextMenuModule, NbDialogModule, NbIconModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbDatepickerModule, DEFAULT_THEME,  } from '@nebular/theme';


//import { NbDialogRef} from '@nebular/theme';
import {ProductComponent} from "../../pages/product/container/product/product.component";
import {ProductNewComponent} from "../../pages/product/components/forms/product-new/product-new.component";
import {ProductEditComponent} from "../../pages/product/components/forms/product-edit/product-edit.component";
import {ProductListComponent} from "../../pages/product/components/list/product-list/product-list.component";
import {ProductsService} from "../../../providers/products/products.service";
import {NivelComponent} from "../../pages/nivel/container/nivel/nivel.component";
import {NivelNewComponent} from "../../pages/nivel/components/forms/nivel-new/nivel-new.component";
import {NivelEditComponent} from "../../pages/nivel/components/forms/nivel-edit/nivel-edit.component";
import {NivelGradosComponent} from "../../pages/nivel/components/forms/nivel-grados/nivel-grados.component";
import {Prueba3Component} from "../../pages/nivel/components/forms/prueba3/prueba3.component"
import {NivelListComponent} from "../../pages/nivel/components/list/nivel-list/nivel-list.component";
import {NivelsService} from "../../../providers/nivels/nivels.service";
import {GradoComponent} from '../../pages/grado/container/grado/grado.component';
import {GradoNewComponent} from '../../pages/grado/components/forms/grado-new/grado-new.component';
import {GradoEditComponent} from '../../pages/grado/components/forms/grado-edit/grado-edit.component';
import {GradoListComponent} from '../../pages/grado/components/list/grado-list/grado-list.component';
import {GradoService} from '../../../providers/grado/grado.service';
import { SeccionComponent} from '../../pages/seccion//container/seccion/seccion.component';
import { SeccionNewComponent} from '../../pages/seccion/components/forms/seccion-new/seccion-new.component';
import { SeccionListComponent} from '../../pages/seccion/components/list/seccion-list/seccion-list.component';

import {SeccionService} from '../../../providers/seccion/seccion.service';

import {DepartamentoComponent} from "../../pages/departamento/container/departamento/departamento.component";
import {DepartamentoNewComponent} from "../../pages/departamento/components/forms/departamento-new/departamento-new.component";
import {DepartamentoEditComponent} from "../../pages/departamento/components/forms/edit-dep/edit-dep.component";
import {DepartamentoListComponent} from "../../pages/departamento/components/list/departamento-list/departamento-list.component";
import {DepartamentosService} from "../../../providers/departamentos/departamentos.service";

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
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
        HttpClientModule,
        NgbModule,
       // NbDialogRef,
        ClipboardModule,
        ReactiveFormsModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    ProductComponent,
    ProductNewComponent,
    ProductEditComponent,
    ProductListComponent,
    NivelComponent,
    NivelNewComponent,
    NivelEditComponent,
    NivelGradosComponent,
    NivelListComponent,
    GradoComponent,
    GradoNewComponent,
    GradoEditComponent,
    GradoListComponent,
    SeccionComponent,
    SeccionNewComponent,
    SeccionListComponent,
    DepartamentoComponent,
    DepartamentoNewComponent,
    DepartamentoEditComponent,
    DepartamentoListComponent,
  ], providers: [ProductsService, DepartamentosService, NivelsService, GradoService, SeccionService, NbThemeModule.forRoot({
    name: 'default',
},
[DEFAULT_THEME],).providers]
})

export class AdminLayoutModule {
}




