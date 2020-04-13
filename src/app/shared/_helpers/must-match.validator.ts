import { FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export class CustomValidators {
    
    static mustMatch(control: AbstractControl){
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }
}