import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CurriculoViewComponent } from './component/curriculo-view/curriculo-view.component';
import { CurriculoAddComponent } from './curriculo/component/curriculo-add/curriculo-add.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'curriculos',
    component: CurriculoComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'curriculo/create',
    component: CurriculoAddComponent,
  },
  {
    path: 'curriculo/admin',
    component: AdminComponent,
  },
  {
    path: 'curriculo/view',
    component: CurriculoViewComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
