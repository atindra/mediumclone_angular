import {Component, inject} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {register} from '../store/actions'
import {RegisterRequest} from '../types/register-request.model'
import {RouterLink} from '@angular/router'
import {AuthState} from '../types/auth-state.model'
import {AsyncPipe} from '@angular/common'
import {AuthService} from '../services/auth.service'
import {selectIsSubmitting} from '../store/reducers'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AsyncPipe],
})
export class RegisterComponent {
  private fb: FormBuilder = inject(FormBuilder)
  private store = inject(Store)
  private authService = inject(AuthService)
  isSubmitting$ = this.store.select(selectIsSubmitting)

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    console.log('form', this.form.getRawValue())
    const request: RegisterRequest = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(register({request}))
  }
}
