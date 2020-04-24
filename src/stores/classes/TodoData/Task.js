import {Model} from "@vuex-orm/core";
import {Todo} from "./Todo";
import {Note} from "./Note";

export class Task extends Model {
    static entity = "tasks";

    static fields() {
        return {
            id: this.uid(),
            title: this.attr(""),
            is_complete: this.boolean(false),
            todo_id: this.attr(""),
            created_at: this.attr(""),
            notes: this.hasMany(Note, "task_id"),
            todo: this.belongsTo(Todo, "todo_id"),
        };
    }
}
