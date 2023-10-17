import { Dog } from "../dog/dog";
import { User } from "../user/user";

export class Adoption {
    _id?: string;
    name!: string;
    user!: User;
    dogList!: string[] | Dog[];
    creation_date?: Date;
    isActive?: boolean;
}