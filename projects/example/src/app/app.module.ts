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
import { MatInputModule } from '@angular/material/input';
import { StDropdownEditorComponent } from './shared/st-dropdown-editor/st-dropdown-editor.component';
import { CustomModalComponent } from './shared/custom-modal/custom-modal.component';
import { StCustomRendererComponent } from './shared/st-custom-renderer/st-custom-renderer.component';
import { DemoComponent } from './demo/demo.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    CustomModalComponent,
    StDropdownEditorComponent,
    StCustomRendererComponent,
    DemoComponent,
    DocumentationComponent
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
    MatInputModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('/ng-spread-table/highlight.js/lib/languages/typescript'),
        css: () => import('/ng-spread-table/highlight.js/lib/languages/css'),
        xml: () => import('/ng-spread-table/highlight.js/lib/languages/xml')
      },
      themePath: '/ng-spread-table/assets/androidstudio.css' // Optional, and useful if you want to change the theme dynamically
    }
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
