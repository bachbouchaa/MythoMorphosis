// workout.component.ts
import { Component, Input } from '@angular/core';
import { Session } from 'src/app/models/workouts/session';
import { Workout } from 'src/app/models/workouts/workout';
import { GymService } from 'src/app/services/gym.service';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  @Input() session!: Session;
  @Input() workout!: Workout;

  constructor(private gymService: GymService) {}

  markWorkoutAsDone(sessionId: number, workoutId: number) {
      this.gymService.markWorkoutDone(sessionId, workoutId).subscribe(
          response => {
              console.log('Workout marked as done:', response);
              // Optionally, update any UI or component state after marking the workout as done
          },
          error => {
              console.error('Error marking workout as done:', error);
          }
      );
  }

}