import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }
}
