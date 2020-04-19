import { Model } from "@vuex-orm/core";

export class Todo extends Model {
  static entity = "todos";

  static fields() {
    return {
      id: this.uid(),
      title: this.attr(""),
      user_id: this.attr(""),
    };
  }
}
