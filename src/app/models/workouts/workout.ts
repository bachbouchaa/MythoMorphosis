// workout.model.ts
export class Workout {
  private id!: number;
  name: string;
  private done: boolean = false;

  constructor(name: string) {
      this.name = name;
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
}