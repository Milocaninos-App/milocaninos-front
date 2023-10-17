import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Adoption } from 'src/app/domain/models/adoption/adoption';
import { AdoptionGateway } from 'src/app/domain/models/adoption/gateway/adoption-gateway';
import { ManageJWTLocal } from 'src/app/domain/usecase/JWT/manage-jwt-local-use-case';
import { environment } from 'src/environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService extends AdoptionGateway {

  constructor(private http: HttpClient,
    private manageJwt: ManageJWTLocal) {
    super();
  }

  url = signal(environment.API_URL + "/user")

  override getById(_id: string): Observable<Adoption> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<Adoption>(this.url() + `/${_id}`, { headers })
    } catch (error) {

      console.log("Error in getById Adoption -> " + error)
      return null
    }
  }
  override getAll(): Observable<Adoption[]> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.get<Adoption[]>(this.url(), { headers })
    } catch (error) {

      console.log("Error in getAll Adoption -> " + error)
      return null
    }
  }
  override postAdoption(adoption: Adoption): Observable<Adoption> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.post<Adoption>(this.url(), adoption, { headers })
    } catch (error) {

      console.log("Error in post Adoption -> " + error)
      return null
    }
  }
  override updateAdoption(_id: string, adoption: Adoption): Observable<any> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.patch<Adoption>(this.url() + `/${_id}`, adoption, { headers })
    } catch (error) {

      console.log("Error in patch Adoption -> " + error)
      return null
    }
  }
  override deleteAdoption(_id: string): Observable<any> | null {
    try {
      const headers = this.manageJwt.getTokenInHeaders()
      return this.http.delete<Adoption>(this.url() + `/${_id}`, { headers })
    } catch (error) {

      console.log("Error in delete Adoption -> " + error)
      return null
    }
  }


}
