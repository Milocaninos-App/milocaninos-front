import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Donation } from 'src/app/domain/models/donation/donation';
import { DonationGateway } from 'src/app/domain/models/donation/gateway/donation-gateway';
import { ManageJWTLocal } from 'src/app/domain/usecase/JWT/manage-jwt-local-use-case';
import { environment } from 'src/environments/environemnt.development';

@Injectable({
  providedIn: 'root'
})
export class DonationService extends DonationGateway {
  constructor(private http: HttpClient,
    private manageJwt: ManageJWTLocal) {
    super();
  }

  url = signal(environment.API_URL + "/user")

  override getById(_id: string): Observable<Donation> {
    const headers = this.manageJwt.getTokenInHeaders();
    return this.http.get<Donation>(this.url() + `/${_id}`, { headers }).pipe(
      catchError((error) => {
        console.log("Error in getById Donation -> " + error);
        return throwError(error); // Return an observable that emits the error
      })
    );
  }
  override getAll(): Observable<Donation[]> {
    const headers = this.manageJwt.getTokenInHeaders();
    return this.http.get<Donation[]>(this.url(), { headers }).pipe(
      catchError((error) => {
        console.log("Error in getAll Donation -> " + error);
        return throwError(error); // Retorna un observable que emite el error
      })
    );
  }

  override postDonation(donation: Donation): Observable<Donation> {
    const headers = this.manageJwt.getTokenInHeaders();
    return this.http.post<Donation>(this.url(), donation, { headers }).pipe(
      catchError((error) => {
        console.log("Error in post Donation -> " + error);
        return throwError(error); // Retorna un observable que emite el error
      })
    );
  }

  override deleteDonation(_id: string): Observable<any> {
    const headers = this.manageJwt.getTokenInHeaders();
    return this.http.delete<Donation>(this.url() + `/${_id}`, { headers }).pipe(
      catchError((error) => {
        console.log("Error in delete Donation -> " + error);
        return throwError(error); // Retorna un observable que emite el error
      })
    );
  }
}
