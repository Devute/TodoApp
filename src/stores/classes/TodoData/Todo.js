import {Model} from "@vuex-orm/core";
import {Task} from "./Task";

export class Todo extends Model {
    static entity = "todos";

    static fields() {
        return {
            id: this.uid(),
            title: this.attr(""),
            user_id: this.attr(""),
            image_path:this.attr(" "),
            created_at: this.attr(""),
            tasks: this.hasMany(Task, "todo_id"),
        };
    }
}
