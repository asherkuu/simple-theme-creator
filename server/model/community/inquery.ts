import mongoose, { Schema } from "mongoose";
import IInquery from "../../interface/community/inquery";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const InquerySchema: Schema<IInquery> = new Schema(
  {
    seq: { type: Number, required: true },
    answer: {
      content: { type: String, default: null },
      createdAt: { type: Date, maxlength: 128, default: null },
      updatedAt: { type: Date, maxlength: 128, default: null },
    },
    isAnswer: { type: Boolean, required: true, default: false },
    content: { type: String, required: true },
    user: { type: String, required: true, maxlength: 128 },
    password: { type: String, required: true, maxlength: 128 },
  },
  {
    timestamps: true,
  }
);

InquerySchema.plugin(autoIncrement.plugin, {
  model: "Inquerys",
  field: "seq",
  startAt: 1, // start
  increment: 1, // end
});

export default mongoose.models.Inquery ||
  mongoose.model<IInquery>("Inquery", InquerySchema);
