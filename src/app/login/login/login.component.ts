import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/_services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  returnUrl: string;

  error: string;

  constructor(private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {

      //Si l'utilisateur est déjà loggué on le redirige vers l'accueil
      if(this.authService.currentUserValue){
        this.router.navigate(['/']);
      }
    }
 
    /**
     * On initialise :
     * -le formulaire
     * -l'URL de redirection après authentification
     */
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.returnUrl = '/';
  }

  //Getter des valeurs du form
  get f(){ return this.loginForm.controls};

  /**
   * On change le booleen submit a true
   * On arrête si le form est invalide
   * On login via le service d'authentification
   * On redirige vers l'URL de redirection
   */
  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value).subscribe(
      res => {
        console.log(res);
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.error(error);
        this.error = 'L\'identifiant et/ou le mot de passe sont incorrects';
        this.loading = false;
      }
    );
  }
}
