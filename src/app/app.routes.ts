import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/public/not-found/not-found.component';
import { MainComponent } from './components/pages/main.component';
import { LoginComponent } from './components/public/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        loadChildren: './components/pages/page.module#PageModule'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];


export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});
