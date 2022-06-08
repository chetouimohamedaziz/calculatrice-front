import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ToolboxModule { }
