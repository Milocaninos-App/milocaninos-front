import { Observable } from "rxjs";
import { Dog } from "../dog";


export abstract class DogGateway {
    abstract getById(_id: string): Observable<Dog> | null
    abstract getAll(): Observable<Dog[]> | null
    abstract postDog(Dog: Dog): Observable<Dog> | null
    abstract updateDog(_id: string, Dog: Dog): Observable<any> | null
    abstract deleteDog(_id: string): Observable<any> | null
    abstract findByQuery(query: string): Observable<Dog[] | Dog> | null
}