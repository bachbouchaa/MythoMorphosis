import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { NgToastService } from "ng-angular-popup";

export const AuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const toast = inject(NgToastService);

    if(!auth.isAuthenticated()) {
        toast.error({detail:"ERROR", summary:"Please Login First!"});
        router.navigate([''])
        return false
    }
    return true
}