import { Routes } from '@angular/router';
import { LessonsListComponent } from './components/cards/lessons-list/lessons-list.component';
import { LessonCardDetailComponent } from './components/cards/lesson-card-detail/lesson-card-detail.component';

export const routes: Routes = [
  {
    component: LessonsListComponent,
    path: '',
  },
  {
    component: LessonCardDetailComponent,
    path: 'detail/:id',
  },
];
