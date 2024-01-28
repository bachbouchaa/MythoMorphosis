import { Workout } from "./workout";

// session.model.ts
export class Session {
  private id!: number;
  private name: string;
  private done: boolean = false;
  workouts: Workout[];
    constructor(name: string,workouts: Workout[]) {
      this.name=name;
      this.workouts=workouts;
    }
  getDone(): boolean {
      return this.done;
  }

  setDone(value: boolean): void {
    this.done = value;
  }
  getId(): number{
    return this.id;
  }  
  getWorkouts(): Workout[] {
    return this.workouts;
  }
  getName(): string {
    return this.name;
  }
  setName(value: string): void {
    this.name = value;
  }
}