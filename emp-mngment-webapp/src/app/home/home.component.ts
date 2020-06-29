import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Is a user logged in?
  showSpinner: boolean;

  get authenticated(): boolean {
    return this.authService.authenticated;
  }
  // The user
  get user(): User {
    return this.authService.user;
  }

  constructor(
    public authService: AuthService,
    public router: Router,
    ) {

    }

  ngOnInit() {}

  async signIn(): Promise<void> {
    this.showSpinner = true;
    await this.authService.signIn().then(
      () => {
        this.showSpinner = false;
      }
    ).finally(
      () => {
        this.showSpinner = false;
        this.router.navigate(['landing-page']);
      }
    );
  }
}
