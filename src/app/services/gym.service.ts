import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../models/workouts/session';

@Injectable({
  providedIn: 'root'
})
export class GymService {
  private apiUrl = 'your_backend_api_url'; 
  constructor(private http: HttpClient) { }
  //réecupérer le tableau des sessions du current_week
  getCurrentWeek(): Observable<Session[]> {
    return this.http.get<Session[]>(`${this.apiUrl}/current_week`);
  }
  //mark workout as done and send it to the backend
  markWorkoutDone(sessionId: number, workoutId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/sessions/${sessionId}/workouts/${workoutId}/done`, {});
  } 
  //mark sessions as done and send it to the backend
  markSessionDone(sessionId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/sessions/${sessionId}/done`, {});
  }
}
