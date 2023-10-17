import { User } from "../user/user";

export class Dog {
    _id?: string;
    name!: string;
    breed!: string;
    birth_date?: Date;
    genre!: string;
    size!: string;
    color!: string;
    description!: string;
    health_status!: string;
    img!: string;
    owner?: User;
    isActive?: boolean;
}