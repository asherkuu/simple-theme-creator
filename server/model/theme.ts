import mongoose, { Schema } from "mongoose";
import ITheme from "../interface/theme";
import autoIncrement from "mongoose-auto-increment";

autoIncrement.initialize(mongoose.connection);

const ThemeSchema: Schema<ITheme> = new Schema(
  {
    seq: { type: Number, required: true },
    user: { type: String, required: true, maxlength: 128 },
    title: { type: String, required: true, maxlength: 128 },
    tags: { type: String, required: true },
    count: {
      view: { type: Number, required: true, default: 0 },
      fork: { type: Number, required: true, default: 0 },
      favor: { type: Number, required: true, default: 0 },
    },
    social: {
      github: {
        id: { type: String, maxlength: 128, default: null },
        show: { type: Boolean, default: false },
      },
    },
    colors: { type: Object },
  },
  {
    timestamps: true,
  }
);

ThemeSchema.plugin(autoIncrement.plugin, {
  model: "Theme",
  field: "seq",
  startAt: 1, // start
  increment: 1, // end
});

export default mongoose.models.Theme ||
  mongoose.model<ITheme>("Theme", ThemeSchema);
