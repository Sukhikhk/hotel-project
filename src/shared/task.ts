import { Entity, Fields } from "remult";

@Entity("tasks", { allowApiCrud: true })
export class Task {
  id: number;
  title: string;
  completed: boolean;
  constructor() {
    this.id = 0;
    this.title = "";
    this.completed = false;
  }
}

Fields.autoIncrement()(Task.prototype, "id");
Fields.string()(Task.prototype, "title");
Fields.boolean()(Task.prototype, "completed");