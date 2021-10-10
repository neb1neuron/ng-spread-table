# SpreadTable - Angular spreadsheet table

## How it looks

![How it looks](https://raw.githubusercontent.com/neb1neuron/spread-table/master/demo.png)

## Demo

[stackblitz](https://codesandbox.io/s/goofy-dan-5703h)

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
    new Column({ displayName: "Album Id", name: "albumId", width: "70px" }),
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

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Versions

### v1.1.0

- improved clipboard functionality to be able to paste from excel and copy from **spread-table** to excel
- added styling for disabled column and improved overall styling
- fixed paste on disabled cells
- **added validations and error on cells**

## Dependencies

```
"ngx-virtual-scroller": "^4.0.3",
"rxjs": "~6.6.0",
```

## License

This repository is licensed with the [MIT].
