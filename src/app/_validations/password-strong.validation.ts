import { AbstractControl } from "@angular/forms";

export class PasswordStrongValidation {

    static StrongPassword(abstractControl: AbstractControl) {

        //capturar o campo de senha
        let senha = abstractControl.get('senha')?.value;

        //Regra: pelo menos 1 letra minúscula, 1 letra maiúscula, 
        //1 dígito numérico e 1 caractere especial (!@#$*)
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(senha)) {
            abstractControl.get('senha')?.setErrors({
                strongPassword: true
            })
        }

        return null;
    }

}