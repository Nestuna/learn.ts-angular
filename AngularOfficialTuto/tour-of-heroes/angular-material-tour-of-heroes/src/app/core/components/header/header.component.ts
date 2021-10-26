import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string;
  @Output() toggleDarkMode = new EventEmitter<boolean>();

  darkTheme?: boolean;

  toggleControl = new FormControl(false);

  constructor() {}

  ngOnInit(): void {
    this.toggleControl.valueChanges
      .subscribe((darkMode) => {
        console.log(darkMode);
        this.toggleDarkMode.emit(darkMode)
      }
    );
  }
}
