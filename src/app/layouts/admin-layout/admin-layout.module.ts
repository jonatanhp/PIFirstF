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
import {ProductComponent} from "../../pages/product/container/product/product.component";
import {ProductNewComponent} from "../../pages/product/components/forms/product-new/product-new.component";
import {ProductEditComponent} from "../../pages/product/components/forms/product-edit/product-edit.component";
import {ProductListComponent} from "../../pages/product/components/list/product-list/product-list.component";
import {ProductsService} from "../../../providers/products/products.service";
import {NivelComponent} from "../../pages/nivel/container/nivel/nivel.component";
import {NivelNewComponent} from "../../pages/nivel/components/forms/nivel-new/nivel-new.component";
import {NivelEditComponent} from "../../pages/nivel/components/forms/nivel-edit/nivel-edit.component";
import {NivelListComponent} from "../../pages/nivel/components/list/nivel-list/nivel-list.component";
import {NivelsService} from "../../../providers/nivels/nivels.service";
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
        HttpClientModule,
        NgbModule,
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
    NivelListComponent,
    DepartamentoComponent,
    DepartamentoNewComponent,
    DepartamentoEditComponent,
    DepartamentoListComponent,
  ], providers: [ProductsService, DepartamentosService, NivelsService]
})

export class AdminLayoutModule {
}
