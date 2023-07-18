import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoAutorPage } from './info-autor.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAutorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAutorPageRoutingModule {}
