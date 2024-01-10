import { Component, OnInit, inject } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterModule,
  UrlSegment,
} from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterModule],
  template: '<h1>{{ title }}</h1>',
})
export class TitleComponent implements OnInit {
  router = inject(Router);
  title!: string;

  ngOnInit(): void {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.title = this.getTitle(events.url);
      }
    });
  }
  getTitle(url: string) {
    const pathMap: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/sales-report': 'Sales Report',
      '/messages': 'Messages',
    };

    return pathMap[url] || 'Dashboard';
  }
}
