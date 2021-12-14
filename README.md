# SpreadTable - Angular spreadsheet table

## How it looks

![How it looks](https://raw.githubusercontent.com/neb1neuron/ng-spread-table/master/spread-table.png)

## Demo

[codesandbox](https://codesandbox.io/s/goofy-dan-5703h)

## Features  
:white_check_mark: copy/paste/cut functionality with keyboard shortcuts  
:white_check_mark: copy/paste/cut in bulk  
:white_check_mark: copy/paste/cut from and into excel  
:white_check_mark: custom validators support  
:white_check_mark: disabled columns  
:white_check_mark: undo/redo on single or batch changes

Note: This plugin is till work in progress

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
    ...// spread-table modules
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
    new Column({
      displayName: "Id",
      name: "id",
      width: "40px",
      editable: false,
    }),
    new Column({ displayName: "Album Id", name: "albumId", width: "70px",validators: [RequiredValidator.required()] }),
    new Column({ displayName: "Title", name: "title", width: "400px" }),
    new Column({ displayName: "Url", name: "url", width: "300px" }),
    new Column({
      displayName: "Thumbnail Url",
      name: "thumbnailUrl",
      width: "300px",
    }),
  ];

  data: any;

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
<div class="p-3 w-100" style="height: 800px;">
  <spread-table [columns]="columns" [rawData]="data | async"></spread-table>
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

## Versions

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
