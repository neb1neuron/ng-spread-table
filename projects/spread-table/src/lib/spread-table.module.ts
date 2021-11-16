import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadTableComponent } from './spread-table.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [SpreadTableComponent, ContextMenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
  ],
  exports: [SpreadTableComponent]
})
export class SpreadTableModule { }
