import {Model} from "@vuex-orm/core";
import {Todo} from "@/stores/classes/TodoData/Todo";

export default class User extends Model {
    static entity = "users";

    static fields() {
        return {
            id: this.attr(''),
            name: this.attr(""),
            email: this.attr(""),

            todos: this.hasMany(Todo, "user_id")
        };
    }
}
