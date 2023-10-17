import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../../models/auth/auth";
import { AuthGateway } from "../../models/auth/gateway/auth-gateway";

@Injectable({
    providedIn: 'root'
})

export class LoginUseCase {
    constructor(private _loginUsecase: AuthGateway) { }

    login(user: Login): Observable<Login> | null {
        return this._loginUsecase.login(user)
    }
}