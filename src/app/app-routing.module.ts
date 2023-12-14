import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingHomeComponent } from './home/home.component';

const routes: Routes = [
    
    {
        path: '',
        component: LandingHomeComponent
    },
    {path: '**', component: LandingHomeComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }