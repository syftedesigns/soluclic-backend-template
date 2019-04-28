import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DocumentsApprovalComponent } from './documents-approval/documents-approval.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditServicesComponent } from './edit-services/edit-services.component';
import { StoreCoordsComponent } from './store-coords/store-coords.component';
import { WarningComponent } from './warning/warning.component';
import { AngularMaterialModule } from '../../angular-material.module';
import { FormsModule } from '@angular/forms';
import { UploadProductsComponent } from './upload-products/upload-products.component';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    DocumentsApprovalComponent,
    EditRoleComponent,
    EditServicesComponent,
    StoreCoordsComponent,
    WarningComponent,
    UploadProductsComponent
  ],
  exports: [
    ProfileComponent,
    DocumentsApprovalComponent,
    EditRoleComponent,
    EditServicesComponent,
    StoreCoordsComponent,
    WarningComponent,
    UploadProductsComponent
  ],
  entryComponents: [
    ProfileComponent,
    DocumentsApprovalComponent,
    EditRoleComponent,
    EditServicesComponent,
    StoreCoordsComponent,
    WarningComponent,
    UploadProductsComponent
  ]
})
export class RenderPagesModule { }
