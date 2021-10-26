import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  @HostBinding('class') public cssThemeClass: string = 'default-theme';

  constructor(private overlay: OverlayContainer) { }

  onToggleTheme(darkMode: boolean):void {
    this.cssThemeClass = darkMode ? 'dark-theme' : 'default-theme';
    if (darkMode) {
      this.overlay.getContainerElement().classList.remove('default-theme');
      this.overlay.getContainerElement().classList.add(this.cssThemeClass);
    } else {
      this.overlay.getContainerElement().classList.remove('dark-theme');
      this.overlay.getContainerElement().classList.add(this.cssThemeClass);
    }
  }


  ngOnInit():void {
    this.overlay.getContainerElement().classList.add(this.cssThemeClass)
  }
}
