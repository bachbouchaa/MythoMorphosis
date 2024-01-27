import { FormControl, FormGroup } from "@angular/forms";

// Exporting a class named FormValidator
export default class FormValidator {

  // Static method for recursively marking all form controls within a FormGroup as dirty
  static markFormGroupTouched(formGroup: FormGroup) {

    // Iterating over each control name in the FormGroup
    Object.keys(formGroup.controls).forEach(controlName => {
      // Getting the control associated with the current control name
      const control = formGroup.get(controlName);

      // If the control is an instance of FormControl
      if (control instanceof FormControl) {
        // Marking the control as touched and dirty, indicating user interaction
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty({ onlySelf: true });
      } 
      // If the control is an instance of FormGroup (nested FormGroup)
      else if (control instanceof FormGroup) {
        // Recursively calling the same method for nested FormGroup
        this.markFormGroupTouched(control);
      }
    });
  } 
}

