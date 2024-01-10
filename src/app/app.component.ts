import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { NotificationComponent } from './notification/notification.component';
import { User } from './model';
import { UserInfoComponent } from './user-info/user-info.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TitleComponent,
    LanguageSelectorComponent,
    NotificationComponent,
    UserInfoComponent,
    LogoComponent,
    NavigationComponent,
    HttpClientModule,
    SvgIconComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Hirelytics Dashboard';
  loggedInUser?: User;
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    this.loggedInUser = {
      id: 'user1',
      fullName: 'Bahaa H. Badawiyeh',
      role: 'Admin',
    };
  }
}
