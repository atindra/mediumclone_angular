import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterRequest} from '../types/register-request.model'
import {CurrentUser} from 'src/app/shared/types/current-user.model'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{Request: RegisterRequest}>,
    'Register success': props<{currentUser: CurrentUser}>(),
    'Register failure': emptyProps(),
  },
})
