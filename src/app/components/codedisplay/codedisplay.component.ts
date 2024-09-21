import {
  Component,
  ElementRef,
  Input,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min.js'; // Importer le langage TypeScript (ajoute d'autres langages si nécessaire)

@Component({
  selector: 'app-codedisplay',
  standalone: true,
  imports: [],
  templateUrl: './codedisplay.component.html',
  styleUrl: './codedisplay.component.css',
})
export class CodedisplayComponent {
  @Input() code: string = '';
  @Input() language: string = 'typescript';

  @ViewChildren('codeElements') codeElements!: QueryList<ElementRef>;

  // Propriété pour stocker le code formaté avec la coloration syntaxique.
  formattedCode: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code']) {
      // Formate le code chaque fois que la propriété 'code' change.
      this.formatCode();
    }
  }

  formatCode() {
    // Utilise Prism.js pour mettre en surbrillance le code en fonction du langage spécifié.
    this.formattedCode = Prism.highlight(
      this.code,
      Prism.languages[this.language],
      this.language,
    );
  }
}
