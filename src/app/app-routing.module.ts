import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingHomeComponent } from './home/home.component';
import { ServiceSuspendedComponent } from './components/service-suspended/service-suspended.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: LandingHomeComponent
            }
        ],
    },
    {
        path: 'service-suspended',
        component: ServiceSuspendedComponent
    },
    {path: '**', redirectTo: '/home'} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }