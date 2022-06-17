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

  constructor() { }

  ngOnInit() {
    this.bodyText
  }

  emailFormControl = new FormControl('', [Validators.required]);
}
