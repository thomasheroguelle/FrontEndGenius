import { SkillTagsEnum } from '../skills-tags/IFilterTags';

export interface ILessonsCards {
  id: number;
  imageUrl: string;
  skillFilterTag: SkillTagsEnum[];
  name: string;
  introduction: string;
  stepOne?: {
    stepTitle: string;
    stepDescription: string;
    componentTitle?: string;
    html?: string;
    typescript?: string;
    css?: string;
    detailNoteHTML?: string;
    detailNoteCSS?: string;
    detailNoteTS?: string;
    logoToDisplay: LogoDisplay;
  };
  stepTwo?: {
    stepTitle?: string;
    stepDescription: string;
    componentTitle?: string;
    html?: string;
    typescript?: string;
    css?: string;
    detailNoteHTML?: string;
    detailNoteCSS?: string;
    detailNoteTS?: string;
    logoToDisplay: LogoDisplay;
  };
  stepThree?: {
    stepTitle?: string;
    stepDescription: string;
    componentTitle?: string;
    html?: string;
    typescript?: string;
    css?: string;
    detailNoteHTML?: string;
    detailNoteCSS?: string;
    detailNoteTS?: string;
    logoToDisplay: LogoDisplay;
  };
  stepFour?: {
    stepTitle?: string;
    stepDescription: string;
    componentTitle?: string;
    html?: string;
    typescript?: string;
    css?: string;
    detailNoteHTML?: string;
    detailNoteCSS?: string;
    detailNoteTS?: string;
    logoToDisplay: LogoDisplay;
  };
}

export interface LogoDisplay {
  tag: string;
  pathImg: string;
}

export const LESSONCARDCONTENT: ILessonsCards[] = [
  {
    id: 1,
    imageUrl: 'https://screenshots.codesandbox.io/h8ur1/75.png',
    skillFilterTag: [SkillTagsEnum.Angular],
    name: 'Comment créer un component.card et un component.list',
    introduction: `<p class="text-introduction">
  Dans le développement front-end, la <b>modularité</b> est un principe clé qui permet de créer des applications web <b>évolutives</b>, <b>maintenables</b> et <b>réutilisables</b>. L'utilisation de <b>cards</b> (cartes) et de <b>listes</b> est un excellent moyen de structurer l'information tout en garantissant une <b>sépération claire des responsabilités</b> entre les composants.<br><br>
  Une <b>card</b> encapsule une unité d'information, telle qu'un article, un produit ou une leçon, tandis qu'une <b>liste</b> gère l'affichage multiple de ces unités. Ce modèle assure une meilleure <b>organisation du contenu</b> et une <b>flexibilité accrue</b> dans l'utilisation des données.
</p>
`,
    stepOne: {
      stepTitle:
        'Passage de données entre composants avec @Input - composant enfant',
      stepDescription: `<p class="step-description">L'annotation <b class="color89ddff">@</b><b class="colorc792ea">Input</b><b class="color89ddff">()</b> est utilisée pour passer des données du composant parent au composant enfant dans Angular.</p>`,
      componentTitle: 'app.component.lessoncard.ts',
      typescript: `@Input() lessonCard!: ILessonsCards;`,
      detailNoteTS: `Dans ce cas, <b>lessonCard!</b>: <b>ILessonsCards</b>; est une propriété qui représente une <b>leçon spécifique</b> définie par l'<b>interface ILessonsCards</b>. Cette propriété attend une <b>donnée</b> qui sera injectée depuis le <b>parent</b>.
`,
      logoToDisplay: {
        tag: 'typescript',
        pathImg: 'assets/stacks-logos/typescript.png',
      },
    },
    stepTwo: {
      stepTitle:
        'Passage de données entre composants avec @Input - composant enfant',
      stepDescription: '',
      componentTitle: 'app.component.lessoncard.html',
      html: `<p>{{ lessonCard.name }}</p>`,
      logoToDisplay: {
        tag: 'html',
        pathImg: 'assets/stacks-logos/html.png',
      },
    },
    stepThree: {
      stepTitle:
        'Passage de données entre composants avec @Input - composant parent',
      stepDescription:
        "En Angular, la directive @Input s'inscrit dans le composant enfant et permet de recevoir des données du composant parent. Cette communication facilite la réutilisation des composants en les rendant plus flexibles et dynamiques selon les données passées par le parent.",
      componentTitle: 'app.component.lessonlist.ts',
      typescript: `lessonsList: ILessonsCards[] = LESSONCARDCONTENT;`,
      detailNoteTS: `Cette ligne déclare une variable <b>lessonsList</b> qui est un <b>tableau d'objets</b> conformes à l'<b>interface ILessonsCards</b>, et elle lui assigne une <b>valeur</b> provenant de <b>LESSONCARDCONTENT</b>.
`,
      logoToDisplay: {
        tag: 'typescript',
        pathImg: 'assets/stacks-logos/typescript.png',
      },
    },
    stepFour: {
      stepTitle:
        'Passage de données entre composants avec @Input - composant parent',
      stepDescription: `
  <app-lesson-card>
    <p class="step-description one">
      <b class="step-description-bold colorff6666">app-lesson-card</b> est responsable de l'affichage d'une carte de leçon.
    </p>
    
    <p class="step-description two">
   <b class="colorffcb6b"> *ngFor</b><b class="color89ddff">="</b><b class="colora5e844">let lesson of lessonsList</b> <b class="color89ddff">"</b> <br>
      <b class="colorffcb6b"> *ngFor</b> est une directive Angular utilisée pour itérer sur une liste d'éléments. 
      <br> <br>Ici, elle parcourt le tableau <b class="colora5e844">lessonsList</b>, qui contient plusieurs objets de type ILessonsCards.
      <br> À chaque itération, une variable locale lesson est créée, représentant un élément du tableau (une leçon).
     
    
    <p class="step-description-underline three">
     <b class="colorffcb6b"> [lessonCard]</b> <b class="color89ddff">="</b><b class="colora5e844">lesson</b><b class="color89ddff">"</b> <br />
      Cette syntaxe est une liaison de propriété (property binding) dans Angular.
    </p>
`,

      componentTitle: 'app.component.lessonlist.html',
      html: `<app-lesson-card *ngFor="let lesson of lessonsList" [lessonCard]="lesson">
      </app-lesson-card>`,
      detailNoteTS: '',
      logoToDisplay: {
        tag: 'html',
        pathImg: 'assets/stacks-logos/html.png',
      },
    },
  },
];
