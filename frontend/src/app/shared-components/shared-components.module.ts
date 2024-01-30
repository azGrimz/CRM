
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



import { LoginComponent } from '../components/login/login.component';
import { CrmRouting } from './crm-routing.module';
import { HomeScreenComponent } from '../pages/home-screen/home-screen.component';
import { HeaderComponent } from '../components/header/header.component';
import { ModalAddContainerComponent } from '../components/modal-add-container/modal-add-container.component';
import { EditContainerComponent } from '../components/modals/edit-container/edit-container.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeScreenComponent,
    HeaderComponent,
    ModalAddContainerComponent,
    EditContainerComponent
  ],
  imports: [
    CommonModule,
    CrmRouting,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule
  ],
  providers:[
    HttpClientModule
  ]
})
export class SharedComponentsModule { }
