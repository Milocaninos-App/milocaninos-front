import { Adoption } from "../adoption/adoption";

export class User {
    _id?: string;
    name!: string;
    email!: string;
    password?: string;
    address!: string;
    telephone!: string;
    occupation!: string;
    img!: string;
    creation_date?: Date;
    birth_date?: Date;
    adoptionList?: string[] | Adoption[];
    roles?: string[];
}