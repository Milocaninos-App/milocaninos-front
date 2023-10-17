import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Dog } from "../../models/dog/dog";
import { DogGateway } from "../../models/dog/gateway/dog-gateway";

@Injectable({
    providedIn: 'root'
})
export class CreateContentUseCase {
    constructor(private dogGateway: DogGateway) { }

    postUser(dog: Dog): Observable<Dog> | null {
        return this.dogGateway.postDog(dog)
    }
}