import { Model } from "@vuex-orm/core";

export class Note extends Model {
  static entity = "notes";

  static fields() {
    return {
      id: this.attr(null),
      note: this.attr(""),
      task_id: this.attr(""),
    };
  }
}
