import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { transition, trigger, style, animate } from '@angular/animations';


@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ])]),
      trigger('fadeOut', [
        transition(':leave', [
          style({ opacity: '1' }),
          animate('.5s ease-out', style({ opacity: '0' })),
        ]),
      ]),
  ],
})
export class VisitorListComponent implements OnInit {

  visitorsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  get visitors() {
    return this.visitorsForm.get('visitors') as FormArray;
  }

  get addButtonDisabled() {
    return this.visitorsForm ? !this.visitorsForm.valid : false;
  }

  ngOnInit() {
  }

  buildForm() {
    this.visitorsForm = this.fb.group({
      visitors: this.fb.array([
        this.fb.group({
          firstName: this.fb.control('', [Validators.required]),
          lastName: this.fb.control('', [Validators.required]),
          email: this.fb.control('', [Validators.required, Validators.email]),
        },
        )
      ])
    });
  }

  addVisitor() {
    if (!this.visitorsForm) {
      this.buildForm();
      return
    }
    this.visitors.push(
      this.fb.group({
        firstName: this.fb.control('', [Validators.required]),
        lastName: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
      },
      )
    );
  }

  getFormControl(index: number) {
    return this.visitors.at(index) as FormControl;
  }

  deleteVisitor(index: number) {
    this.visitors.removeAt(index);
    if (index === 0) {
      this.visitorsForm = null;
    }
  }

}
