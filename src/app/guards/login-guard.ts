import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { ManageJWTLocal } from "../domain/usecase/JWT/manage-jwt-local-use-case"
import { AuthService } from "../infraestructure/driven-adapter/auth-api/auth.service"

export const loginGuard = () => {

    const jwtManageLocal = inject(ManageJWTLocal)
    const authService = inject(AuthService)
    const router = inject(Router)

    if (localStorage.getItem('token') || sessionStorage.getItem('token')) {
        return true
    }

    router.navigate(['/auth'])
    return false

}