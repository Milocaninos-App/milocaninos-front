import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdoptionGateway } from "../../models/adoption/gateway/adoption-gateway";
import { Adoption } from "../../models/adoption/adoption";

@Injectable({
    providedIn: 'root'
})
export class ModifyAdoptionUseCase {
    constructor(private _adoptionGateway: AdoptionGateway) { }

    updateAdoption(_id: string, adoption: Adoption): Observable<any> | null {
        return this._adoptionGateway.updateAdoption(_id, adoption)
    }

    deleteAdoption(_id: string): Observable<any> | null {
        return this._adoptionGateway.deleteAdoption(_id)
    }
}