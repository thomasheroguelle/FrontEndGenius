import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonCardService } from '../../../services/cards/lesson-card.service';
import { Location, NgFor, NgIf } from '@angular/common';
import { CustomFontAwesomeModule } from '../../../../shared/font-awesome/font-awesome.module';
import { CodedisplayComponent } from '../../codedisplay/codedisplay.component';
import { ILessonsCards } from '../../../../interfaces/lessons/ILessonsCards';

@Component({
  selector: 'app-lesson-card-detail',
  standalone: true,
  imports: [CustomFontAwesomeModule, CodedisplayComponent, NgFor, NgIf],
  templateUrl: './lesson-card-detail.component.html',
  styleUrl: './lesson-card-detail.component.css',
})
export class LessonCardDetailComponent {
  lessonCard!: ILessonsCards;
  pathImg: string = '';

  private logoMap: { [key: string]: string } = {
    typescript: 'assets/stacks-logos/typescript.png',
    html: 'assets/stacks-logos/html.png',
    css: 'assets/stacks-logos/css.png',
  };

  constructor(
    private route: ActivatedRoute,
    private lessonCardDetailService: LessonCardService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getCardDetail();
  }

  getCardDetail(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lessonCardDetailService
      .getLessonCardId(id)
      .subscribe((lesson) => (this.lessonCard = lesson));
  }
}
