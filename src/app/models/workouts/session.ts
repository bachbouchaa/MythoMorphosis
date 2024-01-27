import { Workout } from "./workout";

// session.model.ts
export class Session {
  private id!: number;
  name: string;
  private done: boolean = false;
  workouts: Workout[];
    constructor(name: string,workouts: Workout[]) {
      this.name=name;
      this.workouts=workouts;
    }
  getDone(): boolean {
      return this.done;
  }

  setDone() {
      this.done = true;
  }
  getId(): number{
    return this.id;
  }  
  getWorkouts(): Workout[] {
    return this.workouts;
  }
}