import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DonationGateway } from "../../models/donation/gateway/donation-gateway";
import { Donation } from "../../models/donation/donation";


@Injectable({
    providedIn: 'root'
})
export class CreateContentUseCase{
    constructor( private _donationGateway: DonationGateway ){}

    postUser( content: Donation ): Observable<Donation> | null{
        return this._donationGateway.postDonation( content )
    }
}