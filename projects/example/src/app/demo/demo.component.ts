import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { Column, Change, ContextMenuModel, SpreadTableComponent, UndoRedoService, Cell, Row } from 'spread-table';
import { CustomModalComponent } from '../shared/custom-modal/custom-modal.component';
import { RequiredValidator } from '../shared/custom-validators/required-validator';
import { StCustomRendererComponent } from '../shared/st-custom-renderer/st-custom-renderer.component';
import { StDropdownEditorComponent } from '../shared/st-dropdown-editor/st-dropdown-editor.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  frameworkComponents = {
    dropdownEditor: StDropdownEditorComponent,
    customRenderer: StCustomRendererComponent
  };

  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId', editorComponent: this.frameworkComponents.dropdownEditor, editorParams: { items: [1, 2, 3, 4] } }),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer }),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300, rendererComponent: this.frameworkComponents.customRenderer })];

  data: any;
  event!: string;
  result: any;

  gridInstance: SpreadTableComponent = new SpreadTableComponent(new UndoRedoService());

  @ViewChild('spreadTable') set grid(gridInstance: SpreadTableComponent) {
    this.gridInstance = gridInstance;
  }

  extraContextMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-american-sign-language-interpreting',
      menuText: 'Test 1',
      menuEvent: 'test1Event',
      disabled: false,
    },
    {
      faIconName: 'fas fa-archway',
      menuText: 'Test 2',
      menuEvent: 'test2Event',
      disabled: true
    },];

  extraColumnMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-edit',
      menuText: 'Rename column',
      menuEvent: 'renameColumnEvent',
      disabled: false,
    }, {
      faIconName: 'fas fa-plus-square',
      menuText: 'Add column',
      menuEvent: 'addColumnEvent',
      disabled: false,
    },
    {
      faIconName: 'fas fa-trash',
      menuText: 'Remove column',
      menuEvent: 'removeColumnEvent',
      disabled: false
    },];

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {
    this.getData();
  }

  private async getData() {
    const products: any = await lastValueFrom(this.httpClient.get('https://jsonplaceholder.typicode.com/photos'));
    console.log(products);
    this.data = products;
  }

  getSpreadTable() {
    console.log(this.gridInstance as SpreadTableComponent);
    this.gridInstance.headerBgColor = this.randomColor().backgroundColor;
    this.gridInstance.headerColor = this.randomColor().color;
    this.result = Object.keys(this.gridInstance).join('<br>');
    this.event = 'Grid properties';
  }

  getSelectedCells() {
    console.log(this.gridInstance.getSelectedCells());
    this.result = JSON.stringify(this.gridInstance.getSelectedCells(), null, 2);
    this.event = 'Selected Cells';
  }

  getGridData() {
    console.log(this.gridInstance.getData());
    this.result = JSON.stringify(this.gridInstance.getData(), null, 2);
    this.event = 'Grid instance';
  }

  onCellValueChange(event: Change[]) {
    console.log('changes:', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Cell value change';
  }

  onContextMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Menu event';
  }

  async onColumnMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
    this.result = JSON.stringify(event, null, 2);
    this.event = 'Menu event';
    if (event.menuEvent === 'addColumnEvent') {
      const result = await this.openDialog(`Add new column`, 'Column name', 'Add', 'Cancel');

      if (!result) return;

      // define the new column
      const newColumn = new Column({ name: result, displayName: result, editable: true, resizable: true, minWidth: 200, });
      // add the new column to the columns array
      this.columns.splice(this.columns.indexOf(event.column!) + 1, 0, newColumn);
      this.columns = [...this.columns];

      // add cells in the data array for the new column
      this.gridInstance.data.forEach((row: Row) => {
        row.cells.splice(this.columns.indexOf(newColumn), 0, new Cell({ columnName: newColumn.name, value: '', originalValue: '', rowIndex: row.rowIndex }));
      });
      this.gridInstance.setColumnsWidth();
    }

    if (event.menuEvent === 'removeColumnEvent') {
      this.gridInstance.data.forEach((row: Row) => {
        let cells = row.cells.filter((cell: Cell) => cell.columnName !== event.column!.name);
        row.cells = [...cells];
      });

      this.columns.splice(this.columns.indexOf(event.column!), 1);
      this.columns = [...this.columns];

      // if there were changes in the undo stack on this column remove them
      this.gridInstance.undoRedoService._changesForUndo.forEach((changes: Change[]) => {
        changes.forEach((change: Change) => {
          if (change.coordinates.columnName === event.column!.name)
            changes.splice(changes.indexOf(change), 1);
        });
      });

      this.gridInstance.setColumnsWidth();
    }

    if (event.menuEvent === 'renameColumnEvent') {
      const result = await this.openDialog(`Rename - ${event.column!.displayName}`, 'Column name', 'Rename', 'Cancel', event.column!.displayName);

      if (!result) return;

      // change cells column name value to the renamed column name
      this.gridInstance.data.forEach((row: Row) => {
        let cell = row.cells.find((cell: Cell) => cell.columnName === event.column!.name);
        cell!.columnName = result;
      });

      // if there were changes in the undo stack on this column set them to the new column name
      this.gridInstance.undoRedoService._changesForUndo.forEach((changes: Change[]) => {
        changes.forEach((change: Change) => {
          if (change.coordinates.columnName === event.column!.name)
            change.coordinates.columnName = result;
        });
      });

      // rename column in the columns array
      const columnIndex = this.columns.indexOf(event.column!);
      this.columns[columnIndex].displayName = result;
      this.columns[columnIndex].name = result;
      this.columns = [...this.columns];

      this.gridInstance.setColumnsWidth();
    }
  }

  async openDialog(headerText: string, bodyText: string, okButtonText: string, cancelButtonText: string, value: string = '') {
    const dialogRef = this.dialog.open(CustomModalComponent);

    dialogRef.componentInstance.headerText = headerText;
    dialogRef.componentInstance.bodyText = bodyText;
    dialogRef.componentInstance.okButtonText = okButtonText;
    dialogRef.componentInstance.cancelButtonText = cancelButtonText;
    dialogRef.componentInstance.value = value;

    const result = await firstValueFrom(dialogRef.afterClosed());

    return result;
  }

  private randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16);

    /* sometimes the returned value does not have
     * the 6 digits needed, so we do it again until
     * it does
     */

    while (color.length < 6) {
      color = Math.floor(Math.random() * 16777215).toString(16);
    }

    let red = parseInt(color.substring(0, 2), 16);
    let green = parseInt(color.substring(2, 4), 16);
    let blue = parseInt(color.substring(4, 6), 16);
    let brightness = red * 0.299 + green * 0.587 + blue * 0.114;

    /* if (red*0.299 + green*0.587 + blue*0.114) > 180
     * use #000000 else use #ffffff
     */

    if (brightness > 180) {
      return {
        backgroundColor: '#' + color,
        color: '#000000',
      };
    } else
      return {
        backgroundColor: '#' + color,
        color: '#ffffff',
      };
  };

}
