import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    public user;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = {};
   }

  ngOnInit() {
  }

  signIn(){
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        localStorage.setItem('accessToken', res.dataUser.accessToken);
        this.router.navigate(['/crear-proyecto']);
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
