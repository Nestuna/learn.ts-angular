import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/heroes-overview/pages/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/heroes-overview/pages/hero-detail/hero-detail.component';
import { HeroesComponent } from './modules/heroes-overview/pages/heroes/heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'add', component: HeroDetailComponent },
  { path: 'modules', loadChildren: () => import('./modules/modules/modules.module').then(m => m.ModulesModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
