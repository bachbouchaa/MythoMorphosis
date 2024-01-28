
// current-week.component.ts
import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/workouts/session';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-current-week',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.css']
})
  export class CurrentWeekComponent implements OnInit {
    currentWeek!: Session[];
    constructor(private gymService: GymService) {}
    ngOnInit() {
        this.gymService.getCurrentWeek().subscribe(
            currentWeek => {
                this.currentWeek = currentWeek;
            },
            error => {
                console.error('Error fetching current week:', error);
            }
        );
    }
}
