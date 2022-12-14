import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'inicio', 
    pathMatch: 'full'
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./apges/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'login1989',
    loadChildren: () => import('./apges/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registerdoc',
    loadChildren: () => import('./docente/registerdoc/registerdoc.module').then( m => m.RegisterdocPageModule)
  },
  {
    path: 'logindoc',
    loadChildren: () => import('./docente/logindoc/logindoc.module').then( m => m.LogindocPageModule)
  },
  {
    path: 'genqr',
    loadChildren: () => import('./docente/genqr/genqr.module').then( m => m.GenqrPageModule)
  },
  {
    path: 'scanqr',
    loadChildren: () => import('./apges/scanqr/scanqr.module').then( m => m.ScanqrPageModule)
  },
  {
    path: 'seccion',
    loadChildren: () => import('./seccion/seccion.module').then( m => m.SeccionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
