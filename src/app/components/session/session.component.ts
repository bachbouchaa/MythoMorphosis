import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/workouts/session';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent  {
  @Input() currentWeek!: Session[];

  constructor(private gymService: GymService) {}

  markSessionAsDone(sessionId: number) {
      this.gymService.markSessionDone(sessionId).subscribe(
          response => {
              console.log('Session marked as done:', response);
              // Optionally, update any UI or component state after marking the session as done
          },
          error => {
              console.error('Error marking session as done:', error);
          }
      );
  }
}
