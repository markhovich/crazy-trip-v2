import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/_services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { CustomValidators } from 'src/app/shared/_helpers/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;


  emailRegEx: string = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
  regEx: string = '/^([A-Za-z0-9]+)@([A-Za-z0-9]+)\.([a-z]{1,3})$/';
  passwordError: string;
  error: string;

  constructor(private us: UserService,
    private formBuiler: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  /**
   * Initialisation du formulaire
   * On redirige à l'accueil si le client est déjà identifié
   */
  ngOnInit(): void {
    this.registerForm = this.formBuiler.group({
      username: ['jean', Validators.required],
      email: ['jphauteur@gmail.com', [Validators.required, Validators.email]],
      password: ['azerty', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['azerty', [Validators.required, Validators.minLength(6)]]
    },
    {
       validator: CustomValidators.mustMatch
    })

    if(this.authService.currentUserValue){
      this.router.navigate(['/']);
    }

  }

  get f(){ return this.registerForm.controls; }

  /**
   * Le formulaire est soumis : submitted passe à true pour permettre l'affichage d'éventuels messages d'erreurs
   * Si le formulaire est invalide on sort de la fonciton et les messages d'erreurs sont visibles
   * On vérifie si les mots de passe sont bien identiques sinon on sort
   * Le formulaire est bon : loading passe à true le temps que le formulaire charge
   * On enregistre le nouveau contact dans la base via UserService en utilisant les données du form
   * On redirige vers la page de login
   */
  onSubmit(){
    this.submitted = true;

    if(this.registerForm.value.password !== this.registerForm.value.confirmPassword){
      this.passwordError = 'Les mots de passe ne sont pas identiques';
      return;
    }

    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;

    const newUser = new User(0, this.registerForm.value.username,this.registerForm.value.email,this.registerForm.value.password, new Date(), 0);
    
    this.us.register(newUser).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error => {
        this.error = 'Une erreur est survenue'
        console.error(error);
        this.loading = false;
      }
    )
  }

}
