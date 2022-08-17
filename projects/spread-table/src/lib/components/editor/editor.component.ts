import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { IEditor, IEditorComponent, IEditorParams } from '../../models/editor.models';
import { DefaultEditorComponent } from '../default-editor/default-editor.component';
import { EditorDirective } from './editor.directive';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, IEditor {

  @Input() editorParams: IEditorParams;

  @Output() setValue = new EventEmitter<any>();

  input = new UntypedFormControl('');
  defaultEditor = DefaultEditorComponent;

  constructor() { }

  getValue() {
    throw new Error('Method not implemented.');
  }


  @ViewChild(EditorDirective, { static: true }) editorContainer!: EditorDirective;

  ngOnInit() {
    this.input.setValue(this.editorParams.value);
    const viewContainerRef = this.editorContainer.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<IEditorComponent>(this.editorParams.editorComponent ? this.editorParams.editorComponent : this.defaultEditor);
    this.editorParams.input = this.input;
    componentRef.instance.stInit(this.editorParams);
    componentRef.instance.setValue = this.setValue;
  }
}
