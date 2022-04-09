import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Column, Change, ContextMenuModel, SpreadTable } from 'spread-table';
import { RequiredValidator } from './custom-validators/required-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId', minWidth: 120 }),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300 }),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300 })];

  data: any;

  gridInstance: SpreadTable = new SpreadTable();

  @ViewChild('spreadTable') set grid(gridInstance: SpreadTable) {
    this.gridInstance = gridInstance;
  }

  extraContextMenuItems: ContextMenuModel[] =
    [{
      menuText: 'separator'
    }, {
      faIconName: 'fas fa-american-sign-language-interpreting',
      menuText: 'Action2',
      menuEvent: 'action1Event',
      shortcut: 'Ctrl+?',
      disabled: false,
    },
    {
      faIconName: 'fas fa-archway',
      menuText: 'Action 2',
      menuEvent: 'action2Event',
      shortcut: 'Ctrl+?',
      disabled: true
    },];

  constructor(private httpClient: HttpClient) {
    this.getData();
  }

  private async getData() {
    const products: any = await lastValueFrom(this.httpClient.get('../assets/data.json'));

    this.data = products;
  }

  // addColumn() {
  //   this.gridInstance.columns.push(new Column({ displayName: 'New Column', name: 'aaa', minWidth: 150 }));
  // }

  getSpreadTable() {
    console.log(this.gridInstance);
    this.gridInstance.headerBgColor = this.randomColor().backgroundColor;
    this.gridInstance.headerColor = this.randomColor().color;
  }

  getSelectedCells() {
    console.log(this.gridInstance.getSelectedCells());
  }

  getGridData() {
    console.log(this.gridInstance.getData());
  }


  onCellValueChange(event: Change[]) {
    console.log('changes:', event);
  }

  onContextMenuEvent(event: ContextMenuModel) {
    console.log('contextMenuEvent', event);
  }

  private randomColor = () => {
    let color = Math.floor(Math.random() * 16777215).toString(16)

    /* sometimes the returned value does not have
     * the 6 digits needed, so we do it again until
     * it does
     */

    while (color.length < 6) {
      color = Math.floor(Math.random() * 16777215).toString(16)
    }

    let red = parseInt(color.substring(0, 2), 16)
    let green = parseInt(color.substring(2, 4), 16)
    let blue = parseInt(color.substring(4, 6), 16)
    let brightness = red * 0.299 + green * 0.587 + blue * 0.114

    /* if (red*0.299 + green*0.587 + blue*0.114) > 180
     * use #000000 else use #ffffff
     */

    if (brightness > 180) {
      return {
        backgroundColor: '#' + color,
        color: '#000000'
      }
    }
    else return {
      backgroundColor: '#' + color,
      color: '#ffffff'
    }
  }
}
