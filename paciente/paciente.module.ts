import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientePageRoutingModule } from './paciente-routing.module';

import { PacientePage } from './paciente.page';
import {CpfDirective} from "../directive/cpf.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PacientePageRoutingModule,
    CpfDirective
  ],
  declarations: [PacientePage]
})
export class PacientePageModule {}
