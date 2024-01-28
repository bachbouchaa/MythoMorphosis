// workout.model.ts
export class Workout {
  private id!: number;
  private name: string;
  private done: boolean = false;

  constructor(name: string) {
      this.name = name;
  }

  getDone(): boolean {
      return this.done;
  }
  getName(): string {
    return this.name;
  }
  setName(value: string): void {
    this.name = value;
  }
  setDone(value: boolean): void {
    this.done = value;
  }
  getId(): number{
    return this.id;
}
}