import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { AngularMaterialModule } from './angular-material.module';
import { StaticModule } from './components/static/static.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/pages/main.component';
import { LoginComponent } from './components/public/login/login.component';
import { RenderPagesModule } from './components/shared/render-pages.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    APP_ROUTES,
    AngularMaterialModule,
    StaticModule,
    BrowserAnimationsModule,
    RenderPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
