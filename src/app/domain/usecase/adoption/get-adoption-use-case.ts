import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdoptionGateway } from "../../models/adoption/gateway/adoption-gateway";
import { Adoption } from "../../models/adoption/adoption";



@Injectable({
    providedIn: 'root'
})
export class GetAdoptionUseCase{
    constructor( private _adoptionGetway: AdoptionGateway ){}

    getUserById( _id: string ): Observable<Adoption> | null {
        return this._adoptionGetway.getById( _id )
    }

    getAllAdoption(): Observable<Adoption[]> | null {
        return this._adoptionGetway.getAll()
    }
}