
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private emailService: EmailService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.emailService.sendEmail(form.value).subscribe(
        response => {
          console.log('Email sent successfully!', response);
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    }
  }
}
