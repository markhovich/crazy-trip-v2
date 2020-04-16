import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../_services/contact.service';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { User } from 'src/app/shared/_model/User';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted: boolean = false;
  success;

  currentUser: User;
  contactForm: FormGroup;

  constructor(private router: Router,
      private cs: ContactService,
      private authService: AuthService) {
        this.currentUser = this.authService.currentUserValue;
       }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.contactForm = new FormGroup({
      email: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  onSubmitForm(){
    //Le formulaire est soumis donc on passe submitted à true
    this.submitted = true;
    //On récupère les données du form dans cette variable
    const formValue = this.contactForm.value;

    var email: string;
    if(formValue['email']){
      email = formValue['email'];
    } else{
      email = this.currentUser.email;
    }

    
    if(this.contactForm.status == "VALID"){
      this.cs.save({email: email, content: formValue['content']});
      this.success = {
        title: 'Message envoyé avec succès'
      }
      setTimeout(() => {
        this.goToHome();
      }, 2000)
    }
  }
  
  goToHome(){
    this.router.navigate(['/home']);
  }

      //Getters pour le formulaire
    
      get content(){
        return this.contactForm.get('content');
      }
      
      get email(){
        return this.contactForm.get('email');
      }
}
