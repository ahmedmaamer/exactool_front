import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router
import { AuthService } from 'app/services/auth/auth.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;

  constructor( 
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService, ) { }

  ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        fullName: [''],
        email: [''],
        password: [''],
      });
      this.loginForm = this.formBuilder.group({
        email: [''],
        password: [''],
    })
    }
    
    get fullName() {
      return this.signupForm.get('fullName');
    }
    
    get email() {
      return this.signupForm.get('email');
    }
    
    get password() {
      return this.signupForm.get('password');
    }
    
    register() {
      if (this.signupForm.invalid) {
        return;
      }
      this.authService.register(this.signupForm.value).subscribe(() => {
        this.router.navigate(["/login"]);//where to navigate after signup path to login page  
      });
    }

    login(){
      if (this.loginForm.invalid) {
        return;
      }

      const { email, password } = this.loginForm.value;
      this.authService.login({email,password}).subscribe((response: any) => {

        localStorage.setItem('access_token',response.access_token);
        this.router.navigate(['/exactool']); //route when login
      })
    }
  
}
