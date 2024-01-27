import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/workouts/session';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-current-week',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.css']
})
export class CurrentWeekComponent implements OnInit {
  weeklySessions: Session[] = [];

  constructor(private gymService: GymService) { }

  ngOnInit(): void {
    this.getCurrentWeek();
  }

  getCurrentWeek(): void {
    this.gymService.getCurrentWeek()
      .subscribe(sessions => this.weeklySessions = sessions);
  }

  markWorkoutDone(sessionId: number, workoutId: number): void {
    this.gymService.markWorkoutDone(sessionId, workoutId)
      .subscribe(() => {
        const session = this.weeklySessions.find(s => s.getId() === sessionId);
        if (session) {
          const workout = session.getWorkouts().find(w => w.getId() === workoutId);
          if (workout) {
            workout.setDone(); // Update workout status locally
          }
        }
      });
  }

  markSessionDone(sessionId: number): void {
    this.gymService.markSessionDone(sessionId)
      .subscribe(() => {
        const session = this.weeklySessions.find(s => s.getId() === sessionId);
        if (session) {
          session.setDone(); // Update session status locally
        }
      });
  }
}
