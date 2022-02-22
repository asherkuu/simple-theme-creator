import mongoose, { Schema } from "mongoose";
import ITheme from "../interface/theme";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const ThemeSchema: Schema<ITheme> = new Schema(
  {
    seq: { type: Number, required: true },
    title: { type: String, required: true, maxlength: 128 },
    type: { type: String, required: true },
    tags: { type: Array, required: true },
    count: {
      view: { type: Number, required: true, default: 0 },
      fork: { type: Number, required: true, default: 0 },
      favor: { type: Number, required: true, default: 0 },
    },
    colors: { type: Object },
  },
  {
    timestamps: true,
  }
);

ThemeSchema.plugin(autoIncrement.plugin, {
  model: "Themes",
  field: "seq",
  startAt: 1, // start
  increment: 1, // end
});

module.exports = mongoose.model<ITheme>("Themes", ThemeSchema);
