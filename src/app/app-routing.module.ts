import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* #region Views */
import { LoginView } from './login/components/login/login.view';
import { AvailabilityView } from './availability/components/availability/availability.view';
import { DashboardView } from './dashboard/components/dashboard/dashboard.view';
/* #endregion Views */
const routes: Routes = [
  { path: 'login', component: LoginView },
  { path: 'availability', component: AvailabilityView },
  { path: 'dashboard', component: DashboardView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
