import { Model } from "@vuex-orm/core";

export class Task extends Model {
  static entity = "tasks";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(""),
      is_complete: this.boolean(false),
      todo_id: this.attr(""),
    };
  }
}
