import { EventEmitter, Injectable, Input } from "@angular/core";
import { Change } from "../services/undo-redo.service";
import { Cell, Column } from "./cell.model";
import { ContextMenuModel } from "./context-menu.model";

@Injectable({
  providedIn: 'root'
})
export class SpreadTable {
  // inputs
  columnWidth: number;
  itemSize: number;
  indexWidth: number;
  rawData: any;
  headerBgColor: string;
  headerColor: string;
  columns: Column[] = [];

  //outputs
  cellValueChange: EventEmitter<Change[]>;
  contextMenuEvent: EventEmitter<ContextMenuModel>;

  getSelectedCells() { }
  getData() { }

  constructor() {
  }
}

export interface ISpreadTable {
  // inputs
  columnWidth: number;
  itemSize: number;
  indexWidth: number;
  rawData: any;
  headerBgColor: string;
  headerColor: string;
  columns: Column[];

  //outputs
  cellValueChange: EventEmitter<Change[]>;
  contextMenuEvent: EventEmitter<ContextMenuModel>;

  getSelectedCells(): Cell[];
}
