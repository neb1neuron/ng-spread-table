import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Input() headerText = "";
  @Input() bodyText = "";
  @Input() okButtonText = "";
  @Input() cancelButtonText = "";
  @Input() value = "";

  constructor() { }

  ngOnInit() {
    this.input.setValue(this.value);
  }

  input = new FormControl(this.value, [Validators.required]);

  getValue() {
    return this.input.value;
  }
}
