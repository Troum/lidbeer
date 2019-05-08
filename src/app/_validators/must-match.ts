import {FormGroup} from '@angular/forms';

export function MustMatch(control: string, matched: string) {
  return (form: FormGroup) => {
    const pass = form.controls[control];
    const confirm = form.controls[matched];

    if (confirm.errors && !confirm.errors.mustMatch) {
      return;
    }

    if (pass.value !== confirm.value) {
      confirm.setErrors({mustMatch: true});
    } else {
      confirm.setErrors(null);
    }
  };
}
