import { Injectable, Input } from "@angular/core";
import { Column, Row } from "./cell.model";

@Injectable({
  providedIn:'root'
})
export class SpreadTable {
}

export interface ISpreadTable {
  columnWidth:number;
  rawData: any;
  // this needs to be a more complex object that contains dispayName and propertyName to be able to map from the rawData json
  columns: Column[];
  data: Row[];
}
