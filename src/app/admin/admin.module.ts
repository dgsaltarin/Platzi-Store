import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from "./../material/material.module";
import { NavComponent } from "./components/nav/nav.component";
import { TableComponent } from "./components/table/table.component";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { FormProductComponent } from "./components/form-product/form-product.component";
import { ProductEditComponent } from "./components/product-edit/product-edit.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    TableComponent,
    DashboardComponent,
    ProductsListComponent,
    FormProductComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class AdminModule {}
