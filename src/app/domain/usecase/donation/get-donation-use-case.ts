import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DonationGateway } from "../../models/donation/gateway/donation-gateway";
import { Donation } from "../../models/donation/donation";


@Injectable({
    providedIn: 'root'
})
export class GetContentUseCase {
    constructor(private _donationGetway: DonationGateway) { }

    getUserById(_id: string): Observable<Donation> | null {
        return this._donationGetway.getById(_id)
    }

    getAllContent(): Observable<Donation[]> | null {
        return this._donationGetway.getAll()
    }

}