import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
  })
  }


  login(){
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login({email,password}).subscribe((response: any) => {

      localStorage.setItem('access_token',response.access_token);
      this.router.navigate(['/exacttool']); //route when login
    })
  }
}
