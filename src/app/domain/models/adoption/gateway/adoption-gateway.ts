import { Observable } from "rxjs";
import { Adoption } from "../adoption";


export abstract class AdoptionGateway {
    abstract getById(_id: string): Observable<Adoption> | null
    abstract getAll(): Observable<Adoption[]> | null
    abstract postAdoption(adoption: Adoption): Observable<Adoption> | null
    abstract updateAdoption(_id: string, adoption: Adoption): Observable<any> | null
    abstract deleteAdoption(_id: string): Observable<any> | null
}