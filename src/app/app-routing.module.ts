import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'home', canActivate:[AuthGuard], loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './components/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './components/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './components/home/home.module#HomePageModule' },
  { path: 'sale', loadChildren: './components/sale/sale.module#SalePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
