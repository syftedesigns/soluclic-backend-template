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
import { BooleanPipe } from '../../services/pipes/boolean.pipe';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '../../../environments/environment';
import { StaticMapComponent } from './store-coords/static-map.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    RouterModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox.token,
      geocoderAccessToken: environment.mapbox.token
    }),
  ],
  declarations: [
    ProfileComponent,
    DocumentsApprovalComponent,
    EditRoleComponent,
    EditServicesComponent,
    StoreCoordsComponent,
    WarningComponent,
    UploadProductsComponent,
    BooleanPipe,
    StaticMapComponent
  ],
  exports: [
    ProfileComponent,
    DocumentsApprovalComponent,
    EditRoleComponent,
    EditServicesComponent,
    StoreCoordsComponent,
    WarningComponent,
    UploadProductsComponent,
    BooleanPipe,
    StaticMapComponent
  ],
  entryComponents: [
    ProfileComponent,
    DocumentsApprovalComponent,
    EditRoleComponent,
    EditServicesComponent,
    StoreCoordsComponent,
    WarningComponent,
    UploadProductsComponent,
    StaticMapComponent
  ]
})
export class RenderPagesModule { }
