export class Register {
    _id?: string;
    name!: string;
    email!: string;
    password!: string;
    address?: string;
    telephone?: string;
    occupation?: string;
    img?: string;
    creation_date?: Date;
    birth_date?: Date;
    adoptionList?: string[];
    roles?: string[];
}

export class Login {
    email!: string;
    password!: string;
}

export class JwtPayLoad {
    token!: string;
}