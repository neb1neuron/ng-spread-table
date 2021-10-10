import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { SpreadTableComponent } from './spread-table.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';



@NgModule({
  declarations: [SpreadTableComponent, ContextMenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    VirtualScrollerModule,
  ],
  exports: [SpreadTableComponent]
})
export class SpreadTableModule { }
