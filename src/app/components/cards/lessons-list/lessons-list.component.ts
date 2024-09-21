import { Component } from '@angular/core';
import { LessonCardComponent } from '../lesson-card/lesson-card.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  ILessonsCards,
  LESSONCARDCONTENT,
} from '../../../../interfaces/lessons/ILessonsCards';

@Component({
  selector: 'app-lessons-list',
  standalone: true,
  imports: [LessonCardComponent, NgFor, RouterLink],
  templateUrl: './lessons-list.component.html',
  styleUrl: './lessons-list.component.css',
})
export class LessonsListComponent {
  lessonsList: ILessonsCards[] = LESSONCARDCONTENT;
}
