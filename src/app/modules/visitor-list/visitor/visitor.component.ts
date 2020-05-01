import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {
  @Input() control: FormControl;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();

  editMode: boolean = true;
  constructor() { }

  get email() {
    return this.control.get('email') as FormControl;
  }
  get firstName() {
    return this.control.get('firstName') as FormControl;
  }
  get lastName() {
    return this.control.get('lastName') as FormControl;
  }

  ngOnInit() {
  }

  toggleMode() {
    if (this.control.value) {
      this.editMode = !this.editMode;
    }
  }

  saveVisitor() {
    this.control.markAllAsTouched();
    if (this.control.valid) {
      this.editMode = false;
    }
  }

  onDelete() {
    this.delete.emit()
  }

}
