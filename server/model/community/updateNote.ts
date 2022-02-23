import mongoose, { Schema } from "mongoose";
import IUpdateNote from "../../interface/community/updateNote";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const UpdateNoteSchema: Schema<IUpdateNote> = new Schema(
  {
    seq: { type: Number, required: true },
    title: { type: String, required: true, maxlength: 128 },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

UpdateNoteSchema.plugin(autoIncrement.plugin, {
  model: "UpdateNotes",
  field: "seq",
  startAt: 1, // start
  increment: 1, // end
});

export default mongoose.models.UpdateNote ||
  mongoose.model<IUpdateNote>("UpdateNote", UpdateNoteSchema);
