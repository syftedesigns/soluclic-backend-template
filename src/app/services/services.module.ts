import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientServicesService } from './api/client-services.service';
import { RolesService } from './api/roles.service';
import { DatabaseService } from './firebase/database.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ClientServicesService,
    RolesService,
    DatabaseService,
    AuthService
  ],
  declarations: []
})
export class ServicesModule { }
