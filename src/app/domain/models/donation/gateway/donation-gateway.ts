import { Donation } from './../donation';
import { Observable } from "rxjs";


export abstract class DonationGateway {
    abstract getById(_id: string): Observable<Donation>
    abstract getAll(): Observable<Donation[]>
    abstract postDonation(donation: Donation): Observable<Donation>
    abstract deleteDonation(_id: string): Observable<any>
}