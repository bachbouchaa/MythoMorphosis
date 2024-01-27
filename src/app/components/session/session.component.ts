import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Workout } from 'src/app/models/workouts/workout';
import { CurrentWeekService } from 'src/app/services/current-week.service';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
  private exercices!: Observable<Workout[]>;
  private exercises_test = [
    'Exercise1',
    'Exercise2',
    'Exercise3'
  ];
  
  constructor(private currentWeekService: CurrentWeekService){}
  getCurrentWeek() {
    return 'test';
  }
  //mark as done
 
}
