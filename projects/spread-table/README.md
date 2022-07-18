# SpreadTable - Angular spreadsheet table

## How it looks

![How it looks](https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/spread-table.png)

## Demo
*copy/paste won't work neither in stackblitz or codesandbox because these websites use an iframe to run the code and the clipboard api is not allowed in the iframe

[Demo](https://neb1neuron.github.io/ng-spread-table/)

[Stackblitz](https://stackblitz.com/edit/spread-table-angular11?file=src%2Fapp%2Fapp.component.ts)

[Codesandbox](https://codesandbox.io/s/goofy-dan-5703h)

## Features  
:white_check_mark: copy/paste/cut functionality with keyboard shortcuts  
:white_check_mark: copy/paste/cut in bulk  
:white_check_mark: copy/paste/cut from and into excel  
:white_check_mark: custom validators support  
:white_check_mark: custom renderer and editor  
:white_check_mark: disabled columns  
:white_check_mark: undo/redo on single or batch changes  
:white_check_mark: resizable columns  
:white_check_mark: extensible column/context menus with events

### Installation

npm

```bash
npm i spread-table
```

or yarn

```bash
yarn add spread-table
```

### Module Setup (app.module.ts)

```typescript
import { SpreadTableModule } from "spread-table";

@NgModule({
  imports: [
    // Other module imports
    ...
    // spread-table modules
    SpreadTableModule,
  ],
})
export class AppModule {}
```

### Usage (app.component.ts)

```typescript
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Column } from "spread-table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "spread-table-test";
  columns: Column[] = [
    new Column({ displayName: 'Id', name: 'id', editable: false, resizable: false }),
    new Column({ displayName: 'Album Id', name: 'albumId', minWidth: 120 }),
    new Column({ displayName: 'Title', name: 'title', minWidth: 400, validators: [RequiredValidator.required(), RequiredValidator.requiredString()] }),
    new Column({ displayName: 'Url', name: 'url', minWidth: 300 }),
    new Column({ displayName: 'Thumbnail Url', name: 'thumbnailUrl', minWidth: 300 })];

  data: any;

  gridInstance: ISpreadTable = new SpreadTable();

  @ViewChild('spreadTable') set grid(gridInstance: SpreadTable) {
    this.gridInstance = gridInstance;
  }

  constructor(private httpClient: HttpClient) {
    this.getData();
  }

  private async getData() {
    const products: any = this.httpClient.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
  }
}
```

### Usage (app.component.html)

```html
<div class="p-3 w-100"
     style="height: 700px;">
  <spread-table *ngIf="data"
                #spreadTable
                [columns]="columns"
                [minColumnWidth]="100"
                [rowHeight]="36"
                [indexWidth]="60"
                [rawData]="data"
                [undoRedoStackSize]="20"
                [extraContextMenuItems]="extraContextMenuItems"
                [extraColumnMenuItems]="extraColumnMenuItems"
                (cellValueChange)="onCellValueChange($event)"
                (contextMenuEvent)="onContextMenuEvent($event)"
                (columnMenuEvent)="onColumnMenuEvent($event)">

  </spread-table>
</div>
```

## Validators

In order for the validators to work correctly they have to be custom. Even the required validator. This way you can set a custom message for the error. See the example bellow:

### (required-validator.ts)
```typescript
import { AbstractControl, Validators } from "@angular/forms";

export class RequiredValidator extends Validators {
  public static required() {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value ? null : { required: "This field is required" };
  }
}
```

### (app.component.ts)
```typescript
columns: Column[] = [
    new Column({
      displayName: "Id",
      name: "id",
      width: "40px",
      editable: false,
    }),
    new Column({ 
      displayName: "Album Id", 
      name: "albumId", 
      width: "70px",
      validators: [RequiredValidator.required()] 
      }),
    ...
  ];
```

### Result 
![Validations](https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/required-validation.png)

## API
### Inputs
| Input                   | Type               | Default                              | Required | Description                                                                                                                                                                    |
|-------------------------|--------------------|--------------------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [rawData]               | any                |                                      | yes      | json data for the table                                                                                                                                                        |
| [columns]               | Column[]           |                                      | yes      | column definition for the table. The columns should match<br>the data structure in rawData and also configure the properties <br>of the columns in the grid. See Column class. |
| [minColumnWidth]           | number             | 100                                  | no       | default column min-width in px                                                                                                                                                 |
| [rowHeight]              | number             | 24                                   | no       | default row height in px                                                                                                                                                       |
| [indexWidth]            | number             | 60                                   | no       | default Index column width in px                                                                                                                                               |
| [headerBgColor]         | string             | '#634be3'                            | no       | header background color                                                                                                                                                        |
| [headerColor]           | string             | '#efefef'                            | no       | header text color                                                                                                                                                              |
| [extraContextMenuItems] | ContextMenuModel[] | copy,cut,paste,undo,redo             | no       | you can define extra context menu items for the grid.<br>See ContextMenuModel class                                                                                            |
| [columnMenuItems]       | ContextMenuModel[] | reset column size, reset all columns | no       | you can define extra column menu items for the grid.<br>See ContextMenuModel class          
### Outputs
| Output             | Type             | Description                                                                     |
|--------------------|------------------|---------------------------------------------------------------------------------|
| (cellValueChange)  | Change[]         | event fired when a cell value is edited.<br>See Change class.                   |
| (contextMenuEvent) | ContextMenuModel | event fired when a context menu item is clicked.<br>See ContextMenuModel class. |
| (columnMenuEvent)  | ContextMenuModel | event fired when a column menu item is clicked.<br>See ContextMenuModelClass.   |

### Classes
```typescript
export class Column {
  public name = '';
  public displayName?= 'N/A';
  public minWidth?:number;
  public editable?= true;
  public resizable?= true;
  public validators?: any[] | undefined;

  constructor(obj?: Column) {
    Object.assign(this, obj);
    if (!obj?.displayName) {
      this.displayName = obj?.name;
    }
  }
}
```

```typescript
export class ContextMenuModel {
  faIconName?: string = '';
  menuText?: string = '';
  menuEvent?: string = '';
  shortcut?: string = '';
  disabled?: boolean = false;
}
```

```typescript
export class Change {
  beforeValue: any;
  afterValue: any;
  coordinates = { rowIndex: 0, columnIndex: 0 }
  constructor(pagObj?: Change) {
    Object.assign(this, pagObj);
  }
}
```

## Be kind
[![Donate](https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/buy-me-a-beer.svg)](https://www.paypal.com/paypalme/CFeder/5)


<a style="padding-right:200px;padding-bottom:35px;background:url(https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/buy-me-a-beer.svg);background-repeat: no-repeat;background-size: cover;" href="https://www.paypal.com/paypalme/CFeder/5"></a>

<br>
<br>

## Idea behind:
The idea was to implement a web spreadsheet with minimal functionality. The beauty of this plugin is that you can build on this and implement your custom scenarios rather than use some generic implementation of different features.

```
Note: This plugin is till work in progress
```

## Versions
### v3.3.0
-  fix copy/paste in Firefox
### v3.0.0

- update to Angular 13.3.11
- added possibility to create your customer renderer and editor functionality(see Demo)
- added examples for add, remove, rename column
- undoRedoService stack size can now be set
### v2.7.4
- fixed clipboard copy/paste for browsers without clipboard API.Copy/Paste now works also in Firefox.
### v2.7.1
- you can now have resizable columns. Changed width property to minWidth
- added column menu: reset column width/all columns width
- you can make an instance of the grid and use it to change properties or to change/get data from the grid
```typescript
  ...
  gridInstance: ISpreadTable = new SpreadTable();

  @ViewChild('spreadTable') set grid(gridInstance: SpreadTable) {
    this.gridInstance = gridInstance;
  }
  ...
```

### v2.4.1
- fix some bugs regarding copy and paste
- added ability to extend context menu options. You can now catch events fired by the context menu(contextMenuEvent)
- added cell value change events(cellValueChange)
- added getData method to get data from the grid
- added getSelectedCells method that returns the selected cells in the grid
- change highlight(yellow). originalValue property on every cell to be able to mark the cell as a change if value !== originalValue.

### v2.0.0

- this version has some big updates
- updated to **angular 13**
- removed ngx-virtual-scroller dependency
- using divs instead of table structure
- improved styling

### v1.1.1

- improved clipboard functionality to be able to paste from excel and copy from **spread-table** to excel
- added styling for disabled column and improved overall styling
- fixed paste on disabled cells
- **added validations and error on cells**

## Dependencies

```
"rxjs": "~6.6.0",
```

## License

This repository is licensed with the [MIT].
