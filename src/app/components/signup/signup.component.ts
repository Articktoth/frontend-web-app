import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { 
      this.user = {};
    }

  ngOnInit() {
  }

  signUp(){
    this.authService.signUp(this.user)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('accessToken', res.dataUser.accessToken);
        this.router.navigate(['/crear-proyecto']);
      },
      err => {
        console.log(err);
      }
    );

  }

}
