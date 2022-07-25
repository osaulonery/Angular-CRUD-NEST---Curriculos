import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './curriculo/component/admin/admin.component';
import { CurriculoUpdateComponent } from './curriculo/component/curriculo-update/curriculo-update.component';
import { CurriculoViewComponent } from './curriculo/component/curriculo-view/curriculo-view.component';
import { CurriculoAddComponent } from './curriculo/component/curriculo-add/curriculo-add.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HomeComponent } from './curriculo/template/home/home.component';
import { LoginComponent } from './curriculo/template/login/login.component';

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
  {
    path: 'curriculo/update/:id',
    component: CurriculoUpdateComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
