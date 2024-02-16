import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
name: any;
email: any;
phoneNumber: any;
formSubmitted: boolean = false;
onSubmit() {
  
      // Here you can implement the logic to store the contact details
      // For demonstration, let's just log the details to the console
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Phone Number:', this.phoneNumber);
      if (this.validateForm()) {
        // If form is valid, set formSubmitted to true
        this.formSubmitted = true;
  
        // Reset form fields
        this.name = '';
        this.email = '';
        this.phoneNumber = '';
  
        // Optionally, you can reset the formSubmitted flag after a certain delay
        setTimeout(() => {
          this.formSubmitted = false;
        }, 3000);
    }
  }
  

}