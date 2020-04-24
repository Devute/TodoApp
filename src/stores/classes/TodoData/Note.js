import {Model} from "@vuex-orm/core";
import {Task} from "./Task";

export class Note extends Model {
    static entity = "notes";

    static fields() {
        return {
            id: this.attr(null),
            note: this.attr(""),
            task_id: this.attr(""),
            created_at: this.attr(""),
            task: this.belongsTo(Task, "task_id"),
        };
    }
}
