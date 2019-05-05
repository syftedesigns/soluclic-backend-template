import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbsComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
  ],
})
export class StaticModule { }
