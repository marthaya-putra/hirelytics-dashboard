import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent {
  @Input() user!: User;
}
