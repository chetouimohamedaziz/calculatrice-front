import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolboxModule } from '../shared/toolbox.module';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsService } from './operations.service';



@NgModule({
  declarations: [
    CalculatriceComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    ToolboxModule
  ],
  providers: [
    OperationsService
  ]
})
export class OperationsModule { }
