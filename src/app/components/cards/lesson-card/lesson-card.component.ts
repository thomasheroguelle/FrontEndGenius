import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LessonCardService } from '../../../services/cards/lesson-card.service';
import { ILessonsCards } from '../../../../interfaces/lessons/ILessonsCards';

@Component({
  selector: 'app-lesson-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lesson-card.component.html',
  styleUrl: './lesson-card.component.css',
})
export class LessonCardComponent {
  // Input is the child and communicates with the lesson-list parent to display LessonsCards
  @Input() lessonCard!: ILessonsCards;
}
