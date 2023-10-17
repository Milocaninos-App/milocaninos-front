import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Dog } from 'src/app/domain/models/dog/dog';
import { DogGateway } from 'src/app/domain/models/dog/gateway/dog-gateway';
import { ManageJWTLocal } from 'src/app/domain/usecase/JWT/manage-jwt-local-use-case';
import { environment } from 'src/environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class DogService extends DogGateway {

  constructor(private http: HttpClient,
    private manageJwt: ManageJWTLocal) {
    super();
  }
  private destroy$: Subject<void> = new Subject()

  url = signal(environment.API_URL + "/dog")

  override getById(_id: string): Observable<Dog> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<Dog>(this.url() + `/${_id}`, { headers })
    } catch (error) {

      console.log("Error in getById dog -> " + error)
      return null
    }
  }

  override getAll(): Observable<Dog[]> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<Dog[]>(this.url(), { headers })
    } catch (error) {

      console.log("Error in getAll dog -> " + error)
      return null
    }
  }

  override postDog(dog: Dog): Observable<Dog> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.post<Dog>(this.url(), dog, { headers })
    } catch (error) {

      console.log("Error in post dog -> " + error)
      return null
    }
  }

  override updateDog(_id: string, dog: Dog): Observable<any> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.patch<Dog>(this.url() + `/${_id}`, dog, { headers })
    } catch (error) {

      console.log("Error in patch dog -> " + error)
      return null
    }
  }

  override deleteDog(_id: string): Observable<any> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.delete<Dog>(this.url() + `/${_id}`, { headers })
    } catch (error) {

      console.log("Error in delete dog -> " + error)
      return null
    }
  }

  override findByQuery(query: string): Observable<Dog | Dog[]> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<Dog>( this.url() + `/query/${ query }`, { headers } )
  } catch (error) {

      console.log( "Error in findByQuery Content -> " + error )
      return null
  }
  }
}
