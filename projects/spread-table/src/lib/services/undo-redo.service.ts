import { Injectable } from '@angular/core';

export class Change {
  beforeValue: any;
  afterValue: any;
  coordinates = { rowIndex: 0, columnIndex: 0 }
  constructor(pagObj?: Change) {
    Object.assign(this, pagObj);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UndoRedoService {

  private _changesForUndo: [Change[]] = [[]];
  private _changesForRedo: [Change[]] = [[]];
  private _changesCopy: [Change[]] = [[]];
  private stackSize = 20;

  constructor() { }

  setStackSize(size: number) {
    this.stackSize = size;
  }

  setChange(change: Change[]) {
    this._changesForUndo.push(change);
  }

  setCopyData(change: Change[]) {
    this._changesCopy = [change];
  }

  paste() {
    return this._changesCopy[0];
  }

  undo() {
    let lastChange = this._changesForUndo.pop();
    let redoChange: Change[] = [];
    if (lastChange) {
      lastChange.forEach(change => {
        redoChange.push(new Change({ coordinates: change.coordinates, afterValue: change.beforeValue, beforeValue: change.afterValue }))
      });
      this._changesForRedo.push(redoChange);
      if (this._changesForRedo.length === this.stackSize) {
        this._changesForRedo.shift();
      }
    }
    return lastChange;
  }

  redo() {
    let lastChange = this._changesForRedo.pop();
    let undoChange: Change[] = [];
    if (lastChange) {
      lastChange.forEach(change => {
        undoChange.push(new Change({ coordinates: change.coordinates, afterValue: change.beforeValue, beforeValue: change.afterValue }))
      });
      this._changesForUndo.push(undoChange);
      if (this._changesForUndo.length === this.stackSize) {
        this._changesForUndo.shift();
      }
    }
    return lastChange;
  }
}
