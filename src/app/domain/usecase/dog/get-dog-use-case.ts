import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dog } from "../../models/dog/dog";
import { DogGateway } from "../../models/dog/gateway/dog-gateway";

@Injectable({
    providedIn: 'root'
})
export class GetDogUseCase {
    constructor(private _dogGetway: DogGateway) { }

    getUserById(_id: string): Observable<Dog> | null {
        return this._dogGetway.getById(_id)
    }

    getAllDog(): Observable<Dog[]> | null {
        return this._dogGetway.getAll()
    }

    findByQuery(query: string): Observable<Dog[] | Dog> | null {
        return this._dogGetway.findByQuery(query)
    }
}