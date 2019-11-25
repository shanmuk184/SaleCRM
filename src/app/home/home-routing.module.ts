import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'home',

        children: [
          {
            path: '',
            loadChildren: () =>
              import('../components/home/home.module').then(
                m => m.HomePageModule
              )
          }
        ]
      },
      {
        path: 'operations',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../components/operations/operations.module').then(
                m => m.OperationsPageModule
              )
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
