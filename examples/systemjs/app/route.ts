import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component'
import { ServerComponent } from './server/server.component'
export const routes: Routes = [
    { path: '', redirectTo: 'server', pathMatch: 'full' },
    { path: 'server', component: ServerComponent },
    { path: 'client', component: ClientComponent }
];
