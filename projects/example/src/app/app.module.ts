import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SpreadTableModule } from 'spread-table';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { MatInputModule } from '@angular/material/input';
import { StDropdownEditorComponent } from './st-dropdown-editor/st-dropdown-editor.component';
import { StCustomRendererComponent } from './st-custom-renderer/st-custom-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomModalComponent,
    StDropdownEditorComponent,
    StCustomRendererComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    SpreadTableModule,
    ReactiveFormsModule,
    ScrollingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
