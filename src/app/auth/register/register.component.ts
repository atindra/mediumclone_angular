import {Component, inject} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  private fb: FormBuilder = inject(FormBuilder)

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    console.log('form', this.form.getRawValue())
  }
}
