import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from 'angular-svg-icon';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-date-range',
  standalone: true,
  imports: [CalendarModule, FormsModule, SvgIconComponent],
  templateUrl: './date-range.component.html',
  styleUrl: './date-range.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DateRangeComponent {
  @Input() rangeDates?: Date[];
}
