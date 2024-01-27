import {  Session } from "./session";

// session.model.ts
export class CurrentWeek {
    private weeklySessions: Session[];
    private done!: boolean

    constructor(weeklySessions: Session[],
    ) {
        this.weeklySessions=weeklySessions;
    }
  }