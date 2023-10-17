import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdoptionGateway } from "../../models/adoption/gateway/adoption-gateway";
import { Adoption } from "../../models/adoption/adoption";


@Injectable({
    providedIn: 'root'
})
export class CreateAdoptionUseCase{
    constructor( private _adoptionGateway: AdoptionGateway ){}

    postUser( adoption: Adoption ): Observable<Adoption> | null{
        return this._adoptionGateway.postAdoption( adoption )
    }
}