import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/workouts/session';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private apiUrl = 'your_backend_api_url'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getCurrentWeek(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.apiUrl}/current_week`);
  }

  markWorkoutDone(sessionId: number, workoutId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/sessions/${sessionId}/workouts/${workoutId}/done`, {});
  }

  markSessionDone(sessionId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/sessions/${sessionId}/done`, {});
  }
}
