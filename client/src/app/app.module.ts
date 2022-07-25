//MODULES
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

//Parada do preço
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './curriculo/template/header/header.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HomeComponent } from './curriculo/template/home/home.component';
import { NavComponent } from './curriculo/template/nav/nav.component';
import { LoginComponent } from './curriculo/template/login/login.component';
import { CurriculoAddComponent } from './curriculo/component/curriculo-add/curriculo-add.component';
import { AdminComponent } from './curriculo/component/admin/admin.component';
import { CurriculoViewComponent } from './curriculo/component/curriculo-view/curriculo-view.component';
import { CurriculoUpdateComponent } from './curriculo/component/curriculo-update/curriculo-update.component';

//MAT
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurriculoComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    CurriculoAddComponent,
    AdminComponent,
    CurriculoViewComponent,
    CurriculoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    MatTooltipModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
