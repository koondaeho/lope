import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeComponent } from './cake/cake.component';
import { PicnicComponent } from './picnic/picnic.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
    { path: 'cake', component: CakeComponent },
    { path: 'picnic', component: PicnicComponent },
    { path: 'map', component: MapComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
