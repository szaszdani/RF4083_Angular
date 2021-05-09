import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(public loginService: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSub(): void{

    if (this.username === 'Dani' && this.password === 'Dani')
    {
      alert('Sikeresen bejelentkezett!');
      this.loginService.loggedIn = true;
      this.router.navigate(['list']);
    }
    else
    {
      alert('Hibás felhasználónév vagy jelszó!');
    }
  }

}
