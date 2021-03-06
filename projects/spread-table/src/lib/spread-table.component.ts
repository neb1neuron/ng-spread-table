import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cell, Column, Row } from './models/cell.model';
import { SpreadTable } from './models/spread-table.models';
import { Change, UndoRedoService } from './services/undo-redo.service';
import { ContextMenuModel } from './models/context-menu.model';

@Component({
  selector: 'spread-table',
  templateUrl: './spread-table.component.html',
  styleUrls: ['./spread-table.component.scss']
})
export class SpreadTableComponent implements OnChanges, SpreadTable {
  table = document.getElementById('spreadTable');

  @Input() minColumnWidth = 100;
  @Input() rowHeight = 24;
  @Input() indexWidth = 60;
  @Input() undoRedoStackSize = 10;
  @Input() rawData: any = null;
  @Input() headerBgColor = '#634be3';
  @Input() headerColor = '#efefef';
  @Input() columns: Column[] = [];
  @Input() extraContextMenuItems: ContextMenuModel[] = [];
  @Input() extraColumnMenuItems: ContextMenuModel[] = [];

  @Output() cellValueChange = new EventEmitter<Change[]>();
  @Output() contextMenuEvent = new EventEmitter<ContextMenuModel>();
  @Output() columnMenuEvent = new EventEmitter<ContextMenuModel>();

  data: Row[] = [];
  firstLoad = true;

  focus = true;
  form = new FormGroup({});
  formControl = new FormControl();
  selectedRowIndex = -1;

  isMouseDown = false;
  startRowIndex = 0;
  startCellIndex = 0;
  endRowIndex = 0;
  endCellIndex = 0;
  // selectedCellCoordinates?: { rowIndex: number, columnIndex: number } = undefined;
  selectedCellCoordinates?: { rowIndex: number, columnName: string } = undefined;
  isEditMode = false;
  columnBeingResized: Column | null = null;
  htmlColumnBeingResized = null;
  originalColumnsWidth = {};

  isDisplayContextMenu: boolean = false;
  isDisplayColumnMenu: boolean = false;

  contextMenuActions = {
    copy: 'copy',
    cut: 'cut',
    paste: 'paste',
    undo: 'undo',
    redo: 'redo',
  };

  columnMenuActions = {
    resetColumn: 'resetColumn',
    resetAllColumns: 'resetAllColumns'
  };

  editableContextMenu = false;

  contextMenuItems: ContextMenuModel[] = [];
  columnMenuItems: ContextMenuModel[] = [];

  createContextMenuItems(column: Column) {
    let items: ContextMenuModel[] = [{
      faIconName: 'far fa-copy',
      menuText: 'Copy',
      disabled: true,
      menuEvent: this.contextMenuActions.copy,
      shortcut: 'Ctrl+C',
      column: column
    },
    {
      faIconName: 'fas fa-cut',
      menuText: 'Cut',
      menuEvent: this.contextMenuActions.cut,
      shortcut: 'Ctrl+X',
      disabled: !this.editableContextMenu,
      column: column
    },
    {
      faIconName: 'far fa-clipboard',
      menuText: 'Paste',
      menuEvent: this.contextMenuActions.paste,
      shortcut: 'Ctrl+V',
      disabled: !this.editableContextMenu,
      column: column
    }, {
      faIconName: 'fas fa-undo',
      menuText: 'Undo',
      menuEvent: this.contextMenuActions.undo,
      shortcut: 'Ctrl+Z',
      disabled: !this.editableContextMenu,
      column: column
    }, {
      faIconName: 'fas fa-redo',
      menuText: 'Redo',
      menuEvent: this.contextMenuActions.redo,
      shortcut: 'Ctrl+Y',
      disabled: !this.editableContextMenu,
      column: column
    }];

    if (this.extraContextMenuItems?.length) {
      items.push(...this.extraContextMenuItems.map(extraContextMenuItem => {
        extraContextMenuItem.column = column;
        return extraContextMenuItem;
      }));
    }

    this.contextMenuItems = items;
  }

  createColumnMenuItems(column: Column) {
    let items: ContextMenuModel[] = [{
      faIconName: 'fas fa-list',
      menuText: 'Reset Column',
      menuEvent: this.columnMenuActions.resetColumn,
      column: column
    },
    {
      faIconName: 'fas fa-list',
      menuText: 'Reset All Columns',
      menuEvent: this.columnMenuActions.resetAllColumns,
      column: column
    }];

    if (this.extraColumnMenuItems?.length) {
      items.push(...this.extraColumnMenuItems.map(extraColumnMenuItem => {
        extraColumnMenuItem.column = column;
        return extraColumnMenuItem;
      }));
    }

    this.columnMenuItems = items;
  }

  contextMenuPosition: { x: number, y: number } | any;

  @ViewChild('contextMenu', { read: ElementRef }) set contextMenu(element: ElementRef) {
    if (element) {
      const wrapper = this.table?.parentElement?.parentElement?.parentElement;
      element.nativeElement.setAttribute('style', `position: fixed;left: 0px;top: 0px;z-index:100;`);
      let wrapperWidth = 9999999;
      let wrapperHeight = 9999999;

      if (wrapper) {
        wrapperWidth = wrapper.clientWidth + wrapper.offsetLeft;
        wrapperHeight = wrapper.clientHeight + wrapper.offsetTop;
      }
      const contextMenuWidth = element?.nativeElement.clientWidth;
      const contextMenuHeight = element?.nativeElement.clientHeight;

      this.contextMenuPosition.x = this.contextMenuPosition.x + contextMenuWidth > wrapperWidth ? this.contextMenuPosition.x - contextMenuWidth : this.contextMenuPosition.x;
      this.contextMenuPosition.y = this.contextMenuPosition.y + contextMenuHeight > wrapperHeight ? this.contextMenuPosition.y - contextMenuHeight : this.contextMenuPosition.y;

      element.nativeElement.setAttribute('style', `position: fixed;left: ${this.contextMenuPosition.x}px;top: ${this.contextMenuPosition.y}px;z-index:100;`);
    } else {
      this.contextMenuPosition = {};
    }
  }

  columnMenuPosition: { x: number, y: number } | any;
  @ViewChild('columnMenu', { read: ElementRef }) set columnMenu(element: ElementRef) {
    if (element) {
      const wrapper = this.table?.parentElement?.parentElement?.parentElement;
      element.nativeElement.setAttribute('style', `position: fixed;left: 0px;top: 0px;z-index:100;`);
      let wrapperWidth = 9999999;
      let wrapperHeight = 9999999;

      if (wrapper) {
        wrapperWidth = wrapper.clientWidth + wrapper.offsetLeft;
        wrapperHeight = wrapper.clientHeight + wrapper.offsetTop;
      }
      const columnMenuWidth = element?.nativeElement.clientWidth;
      const columnMenuHeight = element?.nativeElement.clientHeight;

      this.columnMenuPosition.x = this.columnMenuPosition.x + columnMenuWidth > wrapperWidth ? this.columnMenuPosition.x - columnMenuWidth : this.columnMenuPosition.x;
      this.columnMenuPosition.y = this.columnMenuPosition.y + columnMenuHeight > wrapperHeight ? this.columnMenuPosition.y - columnMenuHeight : this.columnMenuPosition.y;

      element.nativeElement.setAttribute('style', `position: fixed;left: ${this.columnMenuPosition.x}px;top: ${this.columnMenuPosition.y}px;z-index:100;`);
    } else {
      this.columnMenuPosition = {};
    }
  }

  constructor(public undoRedoService: UndoRedoService) { }

  public getSelectedCells(): Cell[] {
    let selectedCells: Cell[] = [];
    this.data.forEach(r => selectedCells = selectedCells.concat(r.cells.filter(d => d.selected)));
    return selectedCells;
  }

  public getData() {
    return this.data.map(row => {
      let dataRow = {};
      row.cells.map(cell => {
        dataRow[cell.columnName] = cell.value
      });
      return dataRow;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.undoRedoStackSize?.currentValue) {
      this.undoRedoService.setStackSize(this.undoRedoStackSize);
    }
    let data: Row[] = [];
    if (this.firstLoad && this.rawData?.length && this.columns?.length) {
      this.firstLoad = false;
      for (let i = 0; i < this.rawData.length; i++) {
        let row = new Row({ rowIndex: i, cells: [] });

        for (let j = 0; j < this.columns.length; j++) {
          row.cells.push({ columnName: this.columns[j].name, value: this.rawData[i][this.columns[j].name], originalValue: this.rawData[i][this.columns[j].name], rowIndex: i });
        }
        data.push(row);
      }

      this.data = [...data];

      setTimeout(() => {
        document.querySelector('#widthReference')!['style']['min-width'] = (this.indexWidth + this.columns.map(c => c.minWidth || this.minColumnWidth).reduce((a, b) => a + b, 0) + 10) + 'px';
        this.setupTableEvents();
      }, 0);
    }

    if (this.columns?.length > 0) {
      this.columns.map(c => {
        c.minWidth = c.minWidth || this.minColumnWidth;
        this.originalColumnsWidth[c.name] = c.minWidth;
      });
    }
  }

  addColumn(column: Column) {
    this.data.forEach(row => {
      row.cells.splice(this.columns.indexOf(column), 0, new Cell({ columnName: column.name, value: '', originalValue: '', rowIndex: row.rowIndex }));
    });
    this.setColumnsWidth();
  }

  getCellValue(row: Row, columnName: string) {
    return row.cells.find(c => c.columnName === columnName)?.value;
  }

  setupTableEvents() {
    this.table = document.getElementById('spreadTable');

    this.setColumnsWidth();

    if (this.table!["eventListeners"]()!.length) {
      return;
    }

    document.addEventListener('scroll', (e) => { this.isDisplayContextMenu = false; this.isDisplayColumnMenu = false; }, true);

    this.table?.addEventListener("selectstart", () => {
      return false;
    });

    this.table?.addEventListener("mouseup", () => {
      this.isMouseDown = false;
    });

    this.table?.addEventListener("keydown", (e) => { this.keyDownCall(e) });

    window.addEventListener('resize', this.setColumnsWidth);

    const target = document.getElementById('spreadTable');

    target!.addEventListener('paste', (event) => {
      let paste = (event['clipboardData'] || window['clipboardData']).getData('text');

      this.handlePaste(paste);

      if (!this.isEditMode) {
        event.preventDefault();
      }
    });
  }

  setColumnsWidth = () => {
    const headerWidth = document.querySelector('#widthReference')!.clientWidth - 0.1;
    const columnsWidthSum = this.columns.map(c => { return c.minWidth || this.minColumnWidth }).reduce((a, b) => a + b, 0) + this.indexWidth + 10;
    document.querySelector('cdk-virtual-scroll-viewport')!['style'].width = Math.max(columnsWidthSum, headerWidth) + 'px';
    document.getElementById('spread-table-header')!['style'].width = Math.max(columnsWidthSum, headerWidth) + 'px';
    if (headerWidth > columnsWidthSum) {
      this.columns.map(c => {
        const percentage = (c.minWidth || this.minColumnWidth) * 100 / (columnsWidthSum - this.indexWidth - 10);
        c.minWidth = c.minWidth! + ((headerWidth - columnsWidthSum) * percentage / 100);
      });
    }
  }

  mouseUp() {
    this.isMouseDown = false;
  }

  mouseOverCall(cell: Cell) {
    if (!this.isMouseDown || this.isInEditMode(cell)) return;

    this.clearSelection();

    this.selectTo(cell.rowIndex, cell.columnName);
  }

  getDataCell(rowIndex: number, columnName: string): Cell {
    return this.data.find(d => d.rowIndex === rowIndex)?.cells.find(c => c.columnName === columnName) || new Cell;
  }

  doubleClick(cell: Cell) {
    if (this.selectedCellCoordinates?.rowIndex === cell.rowIndex && this.selectedCellCoordinates.columnName === cell.columnName && this.isEditMode) return;
    this.clearSelection();
    this.isDisplayColumnMenu = false;
    this.isDisplayContextMenu = false;
    this.isMouseDown = false;
    this.isEditMode = true;
    this.focus = true;
    this.selectedCellCoordinates = { rowIndex: cell.rowIndex, columnName: cell.columnName };

    this.form = new FormGroup({});

    this.columns.forEach((column) => {
      this.form.addControl(column.name, new FormControl(this.getCellValue(this.data[cell.rowIndex], column.name), column.validators));
    });

    this.startCellIndex = this.columns.indexOf(this.columns.find(c => c.name === cell.columnName)!);
    this.startRowIndex = cell.rowIndex;

    if (this.focus) {
      this.focus = false;
      setTimeout(() => { // this will make the execution after the above boolean has changed
        const cell = document.getElementsByClassName('cell-in-edit')[0] as any;
        if (cell) {
          cell.focus();
        }
      }, 0);
    }
  }

  isInEditMode(cell: Cell) {
    if (!this.selectedCellCoordinates) return false;
    const cellColumnName = this.selectedCellCoordinates.columnName;
    const rowIndex2 = this.selectedCellCoordinates.rowIndex;

    return cell.rowIndex === rowIndex2 && cell.columnName === cellColumnName && this.isEditMode;
  }


  keyDownCall(e: Event) {

    let event = e as KeyboardEvent;

    if (event.ctrlKey && event.key === 'x') {
      this.cutSelectedCellsValues();
      e.stopPropagation();
      e.preventDefault();
      e.cancelBubble = true;
    }

    if (!this.isEditMode) {
      switch (event.key) {
        case 'Delete':
        case 'Backspace':
          this.isEditMode = true;
          this.focus = true;

          this.form = new FormGroup({});

          this.columns.forEach((column) => {
            this.form.addControl(column.name, new FormControl(this.getCellValue(this.data[this.selectedCellCoordinates?.rowIndex || 0], column.name), column.validators));
          });

          this.deleteSelectedCellsValues();

          this.isEditMode = false;

          e.stopPropagation();
          e.preventDefault();
          break;
        case 'ArrowLeft':
          if (this.selectedCellCoordinates) {
            let currentCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.selectedCellCoordinates.columnName);
            let nextCell: Cell | null = null;
            const columnIndex = this.columns.indexOf(this.columns.find(c => c.name === this.selectedCellCoordinates!.columnName)!);
            if (columnIndex - 1 >= 0) {
              if (currentCell) currentCell.selected = false;
              nextCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.columns[columnIndex - 1].name);
            }
            if (nextCell) {
              nextCell.selected = true;
              this.selectedCellCoordinates = { rowIndex: nextCell.rowIndex, columnName: nextCell.columnName };
            }
          }
          break;
        case 'ArrowRight':
          if (this.selectedCellCoordinates) {
            let currentCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.selectedCellCoordinates.columnName);
            let nextCell: Cell | null = null;
            const columnIndex = this.columns.indexOf(this.columns.find(c => c.name === this.selectedCellCoordinates!.columnName)!);
            if (columnIndex + 1 < this.columns.length) {
              if (currentCell) currentCell.selected = false;
              nextCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.columns[columnIndex + 1].name);
            }
            if (nextCell) {
              nextCell.selected = true;
              this.selectedCellCoordinates = { rowIndex: nextCell.rowIndex, columnName: nextCell.columnName };
            }
          }
          break;
        case 'ArrowUp':
          if (this.selectedCellCoordinates) {
            let currentCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.selectedCellCoordinates.columnName);
            let nextCell: Cell | null = null;
            const columnIndex = this.columns.indexOf(this.columns.find(c => c.name === this.selectedCellCoordinates!.columnName)!);
            if (this.selectedCellCoordinates.rowIndex > 0) {
              if (currentCell) currentCell.selected = false;
              nextCell = this.getDataCell(this.selectedCellCoordinates.rowIndex - 1, this.columns[columnIndex].name);
            }
            if (nextCell) {
              nextCell.selected = true;
              this.selectedCellCoordinates = { rowIndex: nextCell.rowIndex, columnName: nextCell.columnName };
            }
          }
          break;
        case 'ArrowDown':
          if (this.selectedCellCoordinates) {
            let currentCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.selectedCellCoordinates.columnName);
            let nextCell: Cell | null = null;
            if (this.selectedCellCoordinates.rowIndex + 1 < this.data.length) {
              if (currentCell) currentCell.selected = false;
              nextCell = this.getDataCell(this.selectedCellCoordinates.rowIndex + 1, this.selectedCellCoordinates.columnName);
            }
            if (nextCell) {
              nextCell.selected = true;
              this.selectedCellCoordinates = { rowIndex: nextCell.rowIndex, columnName: nextCell.columnName };
            }
          }
          break;
        case 'Escape':
        case 'Shift':
          break;
        case 'Enter':
          if (this.selectedCellCoordinates) {
            let selectedCell = this.getDataCell(this.selectedCellCoordinates.rowIndex, this.selectedCellCoordinates.columnName);
            this.doubleClick(selectedCell);
            event.stopPropagation();
          }
          break;
        default:
          if (event.ctrlKey) {

            switch (event.key) {
              case 'v':
                if (navigator.clipboard && navigator.clipboard.readText!) {
                  this.handlePaste();
                }
                break;
              case 'c':
                this.handleCopy();
                break;
              case 'z':
                this.undo();
                break;
              case 'y':
                this.redo();
                break;
              default:
                break;
            }
          }
          break;
      }
    } else {

      if (event.key === 'Enter' || event.key === 'Escape') {
        this.table?.focus();
        event.stopPropagation();
      }
    }
  }

  undo() {
    const lastChange = this.undoRedoService.undo();
    let changes: Change[] = [];
    if (lastChange) {
      this.clearSelection();
      lastChange.forEach(change => {
        let cellData = this.getDataCell(change.coordinates.rowIndex, change.coordinates.columnName);
        if (cellData) {
          this.setCellValueAndValidate(cellData, change.beforeValue);
          cellData.selected = true;
        }

        changes.push({
          coordinates:
            { rowIndex: change.coordinates.rowIndex, columnName: change.coordinates.columnName },
          beforeValue: change.afterValue,
          afterValue: change.beforeValue
        });
      });
      this.cellValueChange.emit(changes);
    }
  }

  redo() {
    const lastChange = this.undoRedoService.redo();
    let changes: Change[] = [];
    if (lastChange) {
      this.clearSelection();
      lastChange.forEach(change => {
        let cellData = this.getDataCell(change.coordinates.rowIndex, change.coordinates.columnName);
        if (cellData) {
          this.setCellValueAndValidate(cellData, change.beforeValue);
          cellData.selected = true;
        }

        changes.push({
          coordinates:
            { rowIndex: change.coordinates.rowIndex, columnName: change.coordinates.columnName },
          beforeValue: change.afterValue,
          afterValue: change.beforeValue
        });
      });
      this.cellValueChange.emit(changes);
    }
  }

  deleteSelectedCellsValues() {
    let selectedCells: Cell[] = [];
    this.data.forEach(r => selectedCells = selectedCells.concat(r.cells.filter(d => d.selected)));

    let changes: Change[] = [];

    selectedCells.forEach(cell => {
      changes.push({
        coordinates:
          { rowIndex: cell.rowIndex, columnName: cell.columnName },
        beforeValue: cell.value,
        afterValue: ''
      });
      this.setCellValueAndValidate(cell, '');
    });

    if (changes.length > 0) {
      this.undoRedoService.setChange(changes);
      this.cellValueChange.emit(changes);
    }
  }

  async cutSelectedCellsValues() {
    let selectedCells: Cell[] = [];
    this.data.forEach(r => selectedCells = selectedCells.concat(r.cells.filter(d => d.selected)));

    let changes: Change[] = [];
    this.handleCopy();

    selectedCells.forEach(cell => {
      changes.push({
        coordinates:
          { rowIndex: cell.rowIndex, columnName: cell.columnName },
        beforeValue: cell.value,
        afterValue: ''
      });
      this.setCellValueAndValidate(cell, '');
    });

    if (changes.length > 0) {
      this.undoRedoService.setChange(changes);
      this.cellValueChange.emit(changes);
    }

  }

  handleCopy = async () => {
    if (this.isEditMode) return;
    let selectedCells: Cell[] = [];
    this.data.forEach(r => selectedCells = selectedCells.concat(r.cells.filter(d => d.selected)));
    this.clearSelection();
    const data = this.groupBy<Cell, number>(selectedCells, c => c.rowIndex);
    let copyString = '';

    data.forEach(valuesRow => {
      valuesRow.map((c: Cell) => {
        copyString += `${c.value}\t`;
        setTimeout(() => {
          c.selected = true;
        }, 200);
      });
      if (copyString.trim().length > 0) {
        copyString = copyString.trimEnd();
      } else {
        copyString = copyString.slice(0, -1);
      }
      if (valuesRow !== data.get([...data][data.size - 1][0])) {
        copyString += '\n';
      }
    });

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(copyString);
    }
  }

  handlePaste = async (pasteText = '') => {
    if (this.isEditMode) return;
    let pastedData;

    if (navigator.clipboard && navigator.clipboard.readText) {

      pastedData = await navigator.clipboard.readText();

    } else {
      pastedData = pasteText;
    }

    if (!pastedData && pastedData !== '') return;

    let dataRows = pastedData.split('\n');

    let copyData: any[] = [];

    dataRows.forEach(dataRow => {
      if (dataRow || dataRow === '') {
        let columns = dataRow.split('\t');
        copyData.push(columns);
      }
    });

    let selectedCells: Cell[] = [];
    this.data.forEach(r => selectedCells = selectedCells.concat(r.cells.filter(d => d.selected)));

    if (selectedCells.length === 0) return;

    const rowIndexDifference = selectedCells[0].rowIndex;
    const columnIndexDifference = this.columns.indexOf(this.columns.find(c => c.name === selectedCells[0].columnName)!);
    this.clearSelection();
    let changes: Change[] = [];

    for (let i = 0; i < copyData.length; i++) {
      const selectedRow = this.data.find(r => r.rowIndex == i + rowIndexDifference);
      if (selectedCells.length > 1) {
        if ((selectedRow?.rowIndex || 0) - rowIndexDifference > copyData.length - 1) break;

      }
      for (let j = 0; j < copyData[i].length; j++) {
        const selectedCell = selectedCells.find(c => c.rowIndex === i + rowIndexDifference && this.columns.indexOf(this.columns.find(col => col.name === c.columnName)!) === j + columnIndexDifference);

        const cell = selectedRow?.cells.find(c => this.columns.indexOf(this.columns.find(col => col.name === c.columnName)!) === j + columnIndexDifference);
        if (!cell || !this.columns.find(col => col.name === cell.columnName)!.editable) continue;
        cell.selected = false;

        const cellRowIndex = cell.rowIndex;
        const cellColumnIndex = this.columns.indexOf(this.columns.find(col => col.name === cell.columnName)!);

        if (selectedCells.length > 1) {
          if (!selectedCell) continue;
          if (cellColumnIndex - columnIndexDifference > copyData[cellRowIndex - rowIndexDifference].length - 1) continue;
        }

        const value = copyData ? copyData[cellRowIndex - rowIndexDifference][cellColumnIndex - columnIndexDifference] || '' : '';

        changes.push({
          coordinates:
            { rowIndex: cell.rowIndex, columnName: cell.columnName },
          beforeValue: cell.value,
          afterValue: value
        });

        this.setCellValueAndValidate(cell, value);

        cell.selected = true;
      }
    }

    if (changes.length > 0) {
      this.undoRedoService.setChange(changes);
      this.cellValueChange.emit(changes);
    }
  }

  setCellValue(row: Row, column: Column, value = null) {
    if (value !== null) {
      this.form.get(column.name)?.setValue(value);
    }

    const cell = row.cells.find(c => c.columnName === column.name)!;

    if (cell.value !== this.form.value[column.name]) {
      const changes = [{
        coordinates:
          { rowIndex: row.rowIndex, columnName: cell.columnName },
        beforeValue: cell.value,
        afterValue: this.form.value[column.name]
      }];
      this.undoRedoService.setChange(changes);
      this.cellValueChange.emit(changes);
      cell.value = this.form.value[column.name];

      this.setCellValueAndValidate(cell, this.form.value[column.name]);

    }

    this.isEditMode = false;
    this.table?.focus();

    if (this.selectedCellCoordinates?.rowIndex === cell.rowIndex &&
      this.selectedCellCoordinates?.columnName === cell.columnName) {
      cell.selected = true;
    }
  }

  clearSelection() {
    this.selectedRowIndex = -1;
    this.isEditMode = false;
    this.selectedCellCoordinates = undefined;

    let selectedCells: Cell[] = this.data.filter(r => r.cells.filter(d => d.selected).length > 0).flatMap(r => r.cells.filter(c => c.selected));

    selectedCells.forEach(dataCell => {
      dataCell.selected = false;
    });
  }

  cellClick(e: Event, cell: Cell) {
    let event = e as MouseEvent;
    if (event.button === 2 && cell.selected) {
      this.isDisplayContextMenu = false;
      this.isDisplayColumnMenu = false;
      return false;
    }

    if (cell.columnName === this.selectedCellCoordinates?.columnName &&
      cell.rowIndex === this.selectedCellCoordinates.rowIndex) {
      return true;
    }
    this.isDisplayContextMenu = false;
    this.isDisplayColumnMenu = false;
    if (!event.ctrlKey) {
      this.clearSelection();
    }

    this.table?.focus();
    this.isMouseDown = true;
    this.isEditMode = false;
    this.selectedCellCoordinates = { rowIndex: cell.rowIndex, columnName: cell.columnName };

    if (event.shiftKey) {
      this.selectTo(cell.rowIndex, cell.columnName);
    } else {
      cell.selected = true;

      this.startCellIndex = this.columns.indexOf(this.columns.find(c => c.name === cell.columnName)!);
      this.startRowIndex = cell.rowIndex;
    }

    return false; // prevent text selection
  }

  selectTo(rowIndex: number, columnName: string) {
    let rowStart, rowEnd, cellStart, cellEnd;

    const columnIndex = this.columns.indexOf(this.columns.find(c => c.name === columnName)!);

    if (rowIndex < this.startRowIndex) {
      rowStart = rowIndex;
      rowEnd = this.startRowIndex;
    } else {
      rowStart = this.startRowIndex;
      rowEnd = rowIndex;
    }

    if (columnIndex < this.startCellIndex) {
      cellStart = columnIndex;
      cellEnd = this.startCellIndex;
    } else {
      cellStart = this.startCellIndex;
      cellEnd = columnIndex;
    }

    this.endCellIndex = cellEnd;
    this.endRowIndex = rowEnd;

    for (var i = rowStart; i <= rowEnd; i++) {

      for (var j = cellStart; j <= cellEnd; j++) {
        let cellData = this.getDataCell(i, this.columns[j].name);
        if (cellData) cellData.selected = true;
      }
    }
  }

  // context menu
  async openContextMenu(e: Event, cell: Cell) {
    const event = e as MouseEvent;

    this.isMouseDown = false;

    if (event.ctrlKey) {
      return true;
    }

    // To prevent browser's default contextmenu
    e.preventDefault();
    e.stopPropagation();

    if (this.isEditMode) {
      return false;
    }

    this.editableContextMenu = this.columns.find(col => col.name === cell.columnName)!.editable || false;
    this.isDisplayContextMenu = true;
    this.isDisplayColumnMenu = false;

    this.createContextMenuItems(this.columns.find(col => col.name === cell.columnName)!);

    this.contextMenuPosition = { x: event.clientX, y: event.clientY };
    return true;
  }

  // columnmneu
  async openColumnMenu(e: Event, column: Column) {
    this.isDisplayColumnMenu = false;
    e.preventDefault();
    e.stopPropagation();
    setTimeout(() => {
      const event = e as MouseEvent;

      this.isMouseDown = false;

      //this.editableColumnMenu = true;
      this.isDisplayColumnMenu = true;
      this.isDisplayContextMenu = false;

      this.createColumnMenuItems(column);

      this.columnMenuPosition = { x: event.clientX, y: event.clientY, column: column };
      return true;

    }, 50);
  }

  handleMenuItemClick(event: any) {
    this.isDisplayContextMenu = false;
    switch (event.menuEvent) {
      case this.contextMenuActions.cut: {
        this.cutSelectedCellsValues();
        this.table?.focus();
        break;
      }
      case this.contextMenuActions.paste: {
        if (navigator.clipboard && navigator.clipboard.readText) {
          this.handlePaste();
          this.table?.focus();
        }
        break
      }
      case this.contextMenuActions.undo: {
        this.undo();
        this.table?.focus();
        break
      }
      case this.contextMenuActions.redo: {
        this.redo();
        this.table?.focus();
        break
      }
      default:
        break;
    }
    this.contextMenuEvent.emit(this.contextMenuItems.find(item => item.menuEvent === event.menuEvent));
  }

  handleColumnMenuItemClick(event: any) {
    this.isDisplayColumnMenu = false;
    switch (event.menuEvent) {
      case this.columnMenuActions.resetColumn: {

        this.columnMenuPosition.column.minWidth = this.originalColumnsWidth[this.columnMenuPosition.column.name];
        this.setColumnsWidth();
        this.table?.focus();
        break;
      }
      case this.columnMenuActions.resetAllColumns: {
        this.resetColumnWidths();
        this.table?.focus();
        break;
      }
      default:
        break;
    }
    this.columnMenuEvent.emit(this.columnMenuItems.find(item => item.menuEvent === event.menuEvent));
  }

  private setCellValueAndValidate(cell: Cell, value: any) {
    cell.value = value;
    cell.selected = true;
    this.formControl = new FormControl(value, this.columns.find(col => col.name === cell.columnName)!.validators);
    const controlErrors = this.formControl.errors;
    let cellErrors: string[] = [];
    if (controlErrors) {
      Object.keys(controlErrors).forEach(key => {
        if (controlErrors[key])
          cellErrors.push(`<i class="fas fa-exclamation-triangle"></i>${controlErrors[key]}`);
      });
    }

    cell.errors = cellErrors.join('<br>');
  }


  private groupBy<T, K>(list: T[], keyGetter: (item: T) => K) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

  clickResizer(event, column: Column) {
    event.preventDefault();
    this.columnBeingResized = column;
    this.htmlColumnBeingResized = event.target?.closest(".columnHeader");
    document.addEventListener('mousemove', this.resize);
    document.addEventListener('mouseup', this.stopResize);
  }

  resize = (event) => {
    if (this.columnBeingResized && this.htmlColumnBeingResized) {
      const { left } = this.htmlColumnBeingResized.getBoundingClientRect() || 0;
      this.columnBeingResized.minWidth = Math.max(event.pageX - left, this.minColumnWidth);
      const headerWidth = document.querySelector('#widthReference')!.clientWidth - 0.1;
      const columnsWidthSum = this.columns.map(c => { return c.minWidth || this.minColumnWidth }).reduce((a, b) => a + b, 0) + this.indexWidth + 10;
      document.querySelector('cdk-virtual-scroll-viewport')!['style'].width = Math.max(columnsWidthSum, headerWidth) + 'px';
      document.getElementById('spread-table-header')!['style'].width = Math.max(columnsWidthSum, headerWidth) + 'px';
    }
  }

  stopResize = () => {
    this.columnBeingResized = null;
    document.removeEventListener('mousemove', this.resize);
    document.removeEventListener('mouseup', this.stopResize);
  }

  resetColumnWidths() {
    this.columns.map(c => {
      c.minWidth = this.originalColumnsWidth[c.name];
    });
    this.setColumnsWidth();
  }

  selectRow(row: Row) {
    this.clearSelection();
    row.cells.forEach(cell => {
      cell.selected = true;
    });
    this.selectedRowIndex = row.rowIndex;
  }
}
