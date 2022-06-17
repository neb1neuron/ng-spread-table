import { EventEmitter, Injectable, Input } from "@angular/core";
import { Change } from "../services/undo-redo.service";
import { Cell, Column } from "./cell.model";
import { ContextMenuModel } from "./context-menu.model";

export class SpreadTable {
  // inputs
  minColumnWidth: number;
  rowHeight: number;
  indexWidth: number;
  rawData: any;
  headerBgColor: string;
  headerColor: string;
  columns: Column[] = [];

  columnMenuItems: ContextMenuModel[];
  contextMenuItems: ContextMenuModel[];
  extraContextMenuItems: ContextMenuModel[];

  //outputs
  cellValueChange: EventEmitter<Change[]>;
  contextMenuEvent: EventEmitter<ContextMenuModel>;

  public getSelectedCells(): Cell[] { return []; }
  public getData() { }

  constructor() {
  }

  resetColumnWidths() { }
}
