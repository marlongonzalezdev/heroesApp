import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  get auth(): User
  {
    return this.authService.auth;
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['./auth']);
  }
}
