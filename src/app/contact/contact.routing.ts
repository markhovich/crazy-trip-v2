import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'contact', component: ContactComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes)