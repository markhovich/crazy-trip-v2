import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/_services/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/_model/User';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';

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
  
  error: string;
  passwordError: boolean = false;

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
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
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

    if(this.registerForm.value.password != this.registerForm.value.confirmPassword){
      this.passwordError = true;
    }
    if(this.registerForm.invalid){
      return;
    }

    this.loading = true;

    const newUser = new User(this.registerForm.value.username,this.registerForm.value.email,this.registerForm.value.password, new Date(), 0);
    
    this.us.register(newUser).subscribe(
      (data: string) => {
        this.router.navigate(['/login']);
        this.error = data;
      },
      error => {
        this.error = 'Un compte avec cet email existe déjà '
        console.error(error);
      }
    )
  }
}
