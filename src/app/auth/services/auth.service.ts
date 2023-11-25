import {HttpClient} from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import {RegisterRequest} from '../types/register-request.model'
import {Observable, map} from 'rxjs'
import {CurrentUser} from 'src/app/shared/types/current-user.model'
import {AuthResponse} from '../types/auth-response.model'
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient)

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response) => response.user))
  }
}
