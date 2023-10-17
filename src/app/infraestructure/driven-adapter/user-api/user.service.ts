import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/user/gateway/user-gateway';
import { User } from 'src/app/domain/models/user/user';
import { ManageJWTLocal } from 'src/app/domain/usecase/JWT/manage-jwt-local-use-case';
import { environment } from 'src/environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {

  constructor(private http: HttpClient,
    private manageJwt: ManageJWTLocal) {
    super();
  }
  private destroy$: Subject<void> = new Subject()

  url = signal(environment.API_URL + "/user")

  override getById(_id: string): Observable<User> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<User>(this.url() + `/${_id}`, { headers })
    } catch (error) {

      console.log("Error in getById user -> " + error)
      return null
    }
  }

  override getAll(): Observable<User[]> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<User[]>(this.url(), { headers })
    } catch (error) {

      console.log("Error in getAll User -> " + error)
      return null
    }
  }

  override postUser(user: User): Observable<User> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.post<User>(this.url(), user, { headers })
    } catch (error) {

      console.log("Error in post User -> " + error)
      return null
    }
  }

  override updateUser(_id: string, user: User): Observable<any> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.patch<User>(this.url() + `/${_id}`, user, { headers })
    } catch (error) {

      console.log("Error in patch User -> " + error)
      return null
    }
  }
  
  override deleteUser(_id: string): Observable<any> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.delete<User>(this.url() + `/${_id}`, { headers })
    } catch (error) {

      console.log("Error in delete User -> " + error)
      return null
    }
  }

}