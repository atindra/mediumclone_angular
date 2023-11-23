import {Route} from '@angular/router'
import {RegisterComponent} from './register/register.component'

export const authRoutes: Route[] = [
  {
    path: '',
    component: RegisterComponent,
  },
]
