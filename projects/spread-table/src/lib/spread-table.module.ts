import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadTableComponent } from './spread-table.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { EditorComponent } from './components/editor/editor.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EditorDirective } from './components/editor/editor.directive';
import { DefaultEditorComponent } from './components/default-editor/default-editor.component';
import { RendererComponent } from './components/renderer/renderer.component';
import { RendererDirective } from './components/renderer/renderer.directive';
import { DefaultRendererComponent } from './components/default-renderer/default-renderer.component';

let components = [SpreadTableComponent, ContextMenuComponent, EditorComponent, EditorDirective, DefaultEditorComponent, RendererComponent, RendererDirective, DefaultRendererComponent];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: components
})
export class SpreadTableModule { }
