import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

type Language = {
  flag: string;
  locale: string;
  name: string;
};

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, DropdownModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LanguageSelectorComponent implements OnInit {
  languages: Language[] = [];
  selectedLanguage!: Language;

  ngOnInit(): void {
    this.languages = [
      {
        flag: 'us',
        locale: 'en-us',
        name: 'Eng (US)',
      },
    ];

    this.selectedLanguage = this.languages[0];
  }
}
