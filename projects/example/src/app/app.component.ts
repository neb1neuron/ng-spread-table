import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Column, Change, ContextMenuModel, SpreadTableComponent, UndoRedoService, Cell, Row } from 'spread-table';
import { MatDialog } from '@angular/material/dialog';
import { RequiredValidator } from './shared/custom-validators/required-validator';
import { StDropdownEditorComponent } from './shared/st-dropdown-editor/st-dropdown-editor.component';
import { StCustomRendererComponent } from './shared/st-custom-renderer/st-custom-renderer.component';
import { CustomModalComponent } from './shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = {
    demo: 'demo',
    docs: 'docs',
  }

  selectedPage = this.pages.demo;

  setPage(page: string) {
    this.selectedPage = page;
  }
}

