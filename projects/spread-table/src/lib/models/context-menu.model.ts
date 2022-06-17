import { Column } from "./cell.model";

export class ContextMenuModel {
  faIconName?: string = '';
  menuText?: string = '';
  menuEvent?: string = '';
  shortcut?: string = '';
  disabled?: boolean = false;
  column?: Column | null | undefined;
}
