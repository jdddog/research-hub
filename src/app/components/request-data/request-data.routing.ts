import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RequestDataComponent} from './request-data.component';

const routes: Routes = [
  {path: '', component: RequestDataComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
