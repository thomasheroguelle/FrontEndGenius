import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ILessonsCards,
  LESSONCARDCONTENT,
} from '../../../interfaces/lessons/ILessonsCards';

@Injectable({
  providedIn: 'root',
})
export class LessonCardService {
  constructor() {}

  getLessonsCards(): Observable<ILessonsCards[]> {
    const lessonsCards = of(LESSONCARDCONTENT);
    return lessonsCards;
  }

  getLessonCardId(id: number): Observable<ILessonsCards> {
    const lessonCard = LESSONCARDCONTENT.find((l) => l.id === id)!;
    return of(lessonCard);
  }
}
