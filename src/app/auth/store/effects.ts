import {inject} from '@angular/core'
import {Actions, createEffect} from '@ngrx/effects'
import {AuthService} from '../services/auth.service'

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {}
)
