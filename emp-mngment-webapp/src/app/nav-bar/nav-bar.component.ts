import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // Should the collapsed nav show?
  showNav: boolean;
  showSpinner: boolean;
  // Is a user logged in?
  get authenticated(): boolean {
    return this.authService.authenticated;
  }
  // The user
  get user(): User {
    var temp: User = this.authService.user;
    return this.authService.user;
  }
  // Spinner
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  constructor(
    private authService: AuthService,
    public router: Router,
    public route: ActivatedRoute) {
    if(this.authenticated){
      this.showSpinner = false;
      this.router.navigate(['landing-page']);
    }
  }

  ngOnInit() {
    this.showNav = false;
  }

  // Used by the Bootstrap navbar-toggler button to hide/show
  // the nav in a collapsed state
  toggleNavBar(): void {
    this.showNav = !this.showNav;
  }

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

  signOut(): void {
    this.authService.signOut();
  }
}
