import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class CustomFontAwesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowLeft);
  }
}
// <fa-icon [icon]="['fas', 'arrow-left']"></fa-icon>
